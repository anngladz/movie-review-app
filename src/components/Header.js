import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>
        <Link to='/movie-review-app/'>Movie Reviews</Link>
      </h1>
    </header>
  );
}

export default Header;
