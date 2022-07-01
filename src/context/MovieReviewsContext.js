import { createContext, useState } from 'react';

const MovieReviewsContext = createContext();

export const MovieReviewsProvider = ({ children }) => {
  const movies = [
    {
      id: 1,
      title: 'Beetle Juice',
      image: 'https://i.ibb.co/7rddtwK/movie-1.jpg',
      desc: 'The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out.',
    },
    {
      id: 2,
      title: 'Pulp Fiction',
      image: 'https://i.ibb.co/Hrdr2t6/movie-2.jpg',
      desc: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    },
    {
      id: 3,
      title: 'El laberinto del fauno',
      image: 'https://i.ibb.co/rx3XHqy/movie-3.jpg',
      desc: 'In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.',
    },
    {
      id: 4,
      title: 'Sweeney Todd: The Demon Barber of Fleet Street',
      image: 'https://i.ibb.co/7rmp8cj/movie-4.jpg',
      desc: 'The legendary tale of a barber who returns from wrongful imprisonment to 1840s London, bent on revenge for the rape and death of his wife, and resumes his trade while forming a sinister partnership with his fellow tenant, Mrs. Lovett.',
    },
    {
      id: 5,
      title: 'Inglourious Basterds',
      image: 'https://i.ibb.co/87HkLRC/movie-5.jpg',
      desc: 'In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owners vengeful plans for the same.',
    },
    {
      id: 6,
      title: 'Monty Python and the Holy Grail',
      image: 'https://i.ibb.co/h8pLHms/movie-6.jpg',
      desc: 'King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.',
    },
  ];

  const [reviews, setReviews] = useState([
    {
      movie_id: 1,
      id: 100,
      text: 'Bettle Juice was good!',
      rating: 6,
    },
    {
      movie_id: 3,
      id: 101,
      text: 'Labyrintos!',
      rating: 5,
    },
    {
      movie_id: 5,
      id: 102,
      text: 'Fecking besterds',
      rating: 6,
    },
    {
      movie_id: 5,
      id: 103,
      text: 'FGreat Movie FGreat MovieFGreat MovieFGreat MovieFGreat MovieFGreat MovieFGreat MovieFGreat MovieFGreat MovieFGreat MovieFGreat Movie!',
      rating: 10,
    },
  ]);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
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
      }}
    >
      {children}
    </MovieReviewsContext.Provider>
  );
};

export default MovieReviewsContext;
