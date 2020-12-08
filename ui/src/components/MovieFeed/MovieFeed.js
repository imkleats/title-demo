import MovieCard from "../MovieCard/MovieCard";
import LoadMoreCard from "../LoadMoreCard/LoadMoreCard";

const MovieFeed = (props) => {
  const feed = props.feed.map((movie) => (
    <MovieCard
      key={movie.tmdbId}
      movieTitle={movie.title}
      moviePoster={movie.thumbnail}
      moviePlot={movie.plot}
    />
  ));
  return [
    ...feed,
    props.showMore ? (
      <LoadMoreCard key={-1} onLoadMore={() => props.onLoadMore()} />
    ) : null,
  ];
};

export default MovieFeed;
