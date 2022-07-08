import { useContext } from 'react';
import { AiFillEdit, AiTwotoneDelete } from 'react-icons/ai';
import MovieReviewsContext from '../context/MovieReviewsContext';
import PropTypes from 'prop-types';

const Review = ({ movieReview }) => {
  const { editReview, deleteReview } = useContext(MovieReviewsContext);
  return (
    <div className='review-wrapper'>
      <span className='rating'>{movieReview.rating}</span>
      <p>
        <span>{movieReview.author}:</span> {movieReview.text}
      </p>
      <div className='icons'>
        <button className='btn-reset' onClick={() => editReview(movieReview)}>
          <AiFillEdit />
        </button>
        <button
          className='btn-reset'
          onClick={() => deleteReview(movieReview.id)}
        >
          <AiTwotoneDelete />{' '}
        </button>
      </div>
    </div>
  );
};

Review.propTypes = {
  movieReview: PropTypes.object,
};

export default Review;
