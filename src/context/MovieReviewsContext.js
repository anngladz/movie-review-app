import { createContext, useState, useEffect } from 'react';

const MovieReviewsContext = createContext();

export const MovieReviewsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewEdit, setReviewEdit] = useState({
    item: {},
    edit: false,
  });

  const url = 'https://mra-json-server.herokuapp.com';

  useEffect(() => {
    fetchMovies();
    // This is for ratings on main page
    fetchReviews();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(`${url}/movies`);
    const data = await response.json();
    setMovies(data);
    setIsLoading(false);
  };

  const fetchReviews = async () => {
    const response = await fetch(`${url}/reviews?_sort=id&_order=desc`);
    const data = await response.json();
    setReviews(data);
  };

  const addReview = async (newReview) => {
    const response = await fetch(`${url}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    });

    const data = await response.json();

    setReviews([...reviews, data]);
    fetchReviews();
  };

  const updateReview = async (id, updItem) => {
    const response = await fetch(`${url}/reviews/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setReviews(reviews.map((item) => (item.id === id ? data : item)));

    setReviewEdit({
      item: {},
      edit: false,
    });
  };

  const editReview = (item) => {
    setReviewEdit({
      item,
      edit: true,
    });
  };

  const deleteReview = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`${url}/reviews/${id}`, { method: 'DELETE' });

      setReviews(reviews.filter((review) => review.id !== id));
    }
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
        reviewEdit,
        isLoading,
        fetchReviews,
        addReview,
        updateReview,
        editReview,
        deleteReview,
        averageRating,
      }}
    >
      {children}
    </MovieReviewsContext.Provider>
  );
};

export default MovieReviewsContext;
