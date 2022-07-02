import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AddReviewForm from './AddReviewForm';
import ReviewList from './ReviewList';
import MovieReviewsContext from '../context/MovieReviewsContext';

const Movie = () => {
  const { movies, reviews, addReview, averageRating, isLoading } =
    useContext(MovieReviewsContext);

  const params = useParams();
  const movie = movies.find((movie) => movie.id === Number(params.id));
  const movieReviews = reviews.filter(
    (review) => review.movie_id === Number(params.id)
  );

  return (
    <>
      {isLoading ? (
        'loading'
      ) : (
        <>
          <div className='movie-wrapper'>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.desc}</p>
            <p>
              Rating:
              <span className='count'>
                {isNaN(averageRating(movie.id)) ? 0 : averageRating(movie.id)}
              </span>
              Reviews:<span className='count'>{movieReviews.length}</span>
            </p>
            <Link to='/' className='btn'>
              Go back
            </Link>
          </div>
          <AddReviewForm addReview={addReview} movieId={movie.id} />
          <ReviewList movieReviews={movieReviews} />
        </>
      )}
    </>
  );
};

export default Movie;
