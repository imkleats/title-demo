const neo4j = require("neo4j-driver");
const fetch = require("node-fetch");

/***************************************************************
 * To demo their recommendation engine capabilities, Neo4j
 * maintains a movie dataset sourced from IMDB and TMDB.
 *
 * One issue is that the links to the IMDB movie poster images are
 * stale. Because the records have a TMDB identifier, I set up a
 * quick function to query a small sample (150 movies) from Neo4j,
 * run a `fetch` against the TMDB API to get a fresh poster path,
 * and save the resulting array for use as an in-memory datastore.
 *
 ***************************************************************/

var fs = require("fs");
var logger = fs.createWriteStream("movies.json", {
  flags: "a", // 'a' means appending (old data will be preserved)
});

const driver = neo4j.driver(
  process.env.NEO4J_URI || "bolt://localhost:7687",
  neo4j.auth.basic(
    process.env.NEO4J_USER || "neo4j",
    process.env.NEO4J_PASSWORD || "notneo4j"
  )
);

const collectPosterInfo = async (driver) => {
  try {
    const session = driver.session();
    const result = await session.run(
      `MATCH (m:Movie)
        CALL {
          WITH m
          MATCH (m)<-[:ACTED_IN]-(a:Actor)
          RETURN collect(a {.name}) as actors
        }
        call {
          WITH m
          MATCH (m)<-[:DIRECTED]-(d:Director)
          RETURN collect(d {.name}) as directors
        }
        call {
          WITH m
          MATCH (m)-[:IN_GENRE]->(g:Genre)
          RETURN collect(g {.name}) as genres
        }
        RETURN m { .title, .tmdbId, .plot, .imdbRating, .released, actors: actors, directors: directors, genres: genres} as movies LIMIT 150`,
      {}
    );
    const movies = result?.records?.map((record) => record.get("movies"));
    session.close();
    const moviesWithPoster = Promise.all(
      movies.map(async (movie) => {
        const thumbnail = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
        )
          .then((res) => res.json())
          .then(
            (data) => `https://image.tmdb.org/t/p/w154${data["poster_path"]}`
          );
        return {
          ...movie,
          thumbnail,
        };
      })
    );
    return moviesWithPoster;
  } catch (e) {
    console.error(e);
  }
};

collectPosterInfo(driver)
  .then((result) => {
    console.log("Connected and inferred");
    logger.write(JSON.stringify(result, null, 2));
    console.log("completed inference");
    process.exit();
  })
  .catch((e) => console.error(e));
