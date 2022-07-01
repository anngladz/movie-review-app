import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MoviePage from './components/Movie';

function App() {
  const [movies, setMovies] = useState([
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
  ]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<MovieList movies={movies} />} />
        <Route path='/:id' element={<MoviePage movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
