const MovieCard = ({ movie, averageRating }) => {
  return (
    <div className='movie-card'>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>
        Rating: {isNaN(averageRating(movie.id)) ? 0 : averageRating(movie.id)}
      </p>
    </div>
  );
};

export default MovieCard;
