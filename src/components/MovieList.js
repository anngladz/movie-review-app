import { useContext } from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import MovieReviewsContext from '../context/MovieReviewsContext';

const MovieList = () => {
  const { movies, averageRating } = useContext(MovieReviewsContext);
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
