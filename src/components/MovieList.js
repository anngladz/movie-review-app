import { useContext } from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import MovieReviewsContext from '../context/MovieReviewsContext';
import Spinner from './Spinner';

const MovieList = () => {
  const { movies, averageRating, isLoading } = useContext(MovieReviewsContext);
  return (
    <div className='movie-list'>
      {isLoading ? (
        <Spinner />
      ) : (
        movies.map((movie) => (
          <Link key={movie.id} to={`/movie-review-app/${movie.id}`}>
            <MovieCard movie={movie} averageRating={averageRating} />
          </Link>
        ))
      )}
    </div>
  );
};

export default MovieList;
