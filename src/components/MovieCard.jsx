const MovieCard = ({ movie }) => {
  const { title, year, rating, poster, genre } = movie;

  return (
    <div className="movie-card">
      {poster ? (
        <img src={poster} alt={title} />
      ) : (
        <div className="no-poster">No Poster Available</div>
      )}

      <h3>{title}</h3>
      <p>Year: {year}</p>
      <p>Rating: {rating}</p>
      <p>Genre: {genre}</p>
    </div>
  );
};

export default MovieCard;