import { createContext, useState, useEffect } from 'react';

const MovieReviewsContext = createContext();

export const MovieReviewsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovies();
    fetchReviews();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch('/movies');
    const data = await response.json();
    setMovies(data);
    setIsLoading(false);
  };

  const fetchReviews = async () => {
    const response = await fetch('/reviews');
    const data = await response.json();
    setReviews(data);
  };

  const addReview = async (newReview) => {
    const response = await fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    });

    const data = await response.json();

    setReviews([...reviews, data]);
  };

  const averageRating = (movieId) => {
    const movieReviews = reviews.filter(
      (review) => review.movie_id === Number(movieId)
    );
    return Math.round(
      movieReviews.reduce((acc, { rating }) => acc + rating, 0) /
        movieReviews.length
    );
  };

  return (
    <MovieReviewsContext.Provider
      value={{
        movies,
        reviews,
        addReview,
        averageRating,
        isLoading,
      }}
    >
      {children}
    </MovieReviewsContext.Provider>
  );
};

export default MovieReviewsContext;
