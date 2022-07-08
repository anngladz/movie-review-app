import PropTypes from 'prop-types';

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

MovieCard.propTypes = {
  movie: PropTypes.object,
  averageRating: PropTypes.func,
};

export default MovieCard;
