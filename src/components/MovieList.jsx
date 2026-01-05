import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={`${movie.title}-${movie.year}`}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default MovieList;