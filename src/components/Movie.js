import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Movie = ({ movies }) => {
  const params = useParams();

  const movie = movies.find((movie) => movie.id === Number(params.id));

  return (
    <div className='movie-wrapper'>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.desc}</p>
      <p>Rating: 0 Reviews: 0</p>
      <Link to='/' className='btn'>
        Go back
      </Link>
    </div>
  );
};
export default Movie;
