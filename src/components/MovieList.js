import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className='movie-list'>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/${movie.id}`}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};
export default MovieList;
