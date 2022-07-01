import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import { MovieReviewsProvider } from './context/MovieReviewsContext';

function App() {
  return (
    <MovieReviewsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<MovieList />} />
          <Route path='/:id' element={<Movie />} />
        </Routes>
      </Router>
    </MovieReviewsProvider>
  );
}

export default App;
