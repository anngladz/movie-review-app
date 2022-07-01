const MovieCard = ({ movie }) => {
  return (
    <div className='movie-card'>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>Rating: 0</p>
    </div>
  );
};
export default MovieCard;
