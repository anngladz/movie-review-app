import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieList = ({ movies, averageRating }) => {
  return (
    <div className='movie-list'>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/${movie.id}`}>
          <MovieCard movie={movie} averageRating={averageRating} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
