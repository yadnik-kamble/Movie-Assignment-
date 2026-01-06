const MovieCard = ({ movie }) => {
  const { title, year, rating, poster, genre } = movie;

  return (
    <div className="movie-card">
      {poster ? (
        <img src={poster} />
      ) : (
        <div className="no-poster">No Poster</div>
      )}
      <div className="movie-card-content">
        <h3>{title}</h3>
        <p>Year: {year}</p>
        <span className="rating">rating ⭐ {rating}</span>
      </div>
    </div>
  );
};

export default MovieCard;
