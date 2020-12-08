import movieDb from "./movies";

// This is intended to be analogous to whatever
// interface you might get with an ORM or what have you
// that abstracts away the connection with the persistence
// layer.

const movieProvider = {
  getMany: ({ limit, offset }) => {
    limit = limit ?? 20;
    offset = offset ?? 0;
    return {
      movieList: movieDb.slice(offset, offset + limit),
      pageDetail: {
        offset,
        limit,
        totalRecords: movieDb.length,
      },
    };
  },
  findById: (_id) => movieDb.find((movie) => movie.tmdbId === _id),
};

export default movieProvider;
