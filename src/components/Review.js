import { useContext } from 'react';
import { AiFillEdit, AiTwotoneDelete } from 'react-icons/ai';
import MovieReviewsContext from '../context/MovieReviewsContext';

const Review = ({ movieReview }) => {
  const { editReview, deleteReview } = useContext(MovieReviewsContext);
  return (
    <div className='review-wrapper'>
      <span>{movieReview.rating}</span>
      <p>{movieReview.text}</p>
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

export default Review;
