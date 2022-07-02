import { useState, useContext, useEffect } from 'react';
import Rating from './Rating';
import MovieReviewsContext from '../context/MovieReviewsContext';

const AddReviewForm = ({ movieId }) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const { addReview, reviewEdit, updateReview } =
    useContext(MovieReviewsContext);

  useEffect(() => {
    if (reviewEdit.edit === true) {
      setBtnDisabled(false);
      setText(reviewEdit.item.text);
      setRating(reviewEdit.item.rating);
    }
  }, [reviewEdit]);

  const handleTextChange = ({ target: { value } }) => {
    if (value === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value.trim().length < 10) {
      setMessage('Review must have at least 10 characters!');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newReview = {
        movie_id: movieId,
        text,
        rating,
      };

      if (reviewEdit.edit === true) {
        updateReview(reviewEdit.item.id, newReview);
      } else {
        addReview(newReview);
      }

      setBtnDisabled(true);
      setRating(10);
      setText('');
    }
  };

  return (
    <form className='form-wrapper' onSubmit={handleSubmit}>
      <Rating select={setRating} selected={rating} />
      <div>
        <input
          type='text'
          onChange={handleTextChange}
          placeholder='Type a review here'
          value={text}
        />
        <button disabled={btnDisabled} className='btn'>
          Submit
        </button>
      </div>
      {message && <p className='message'>{message}</p>}
    </form>
  );
};

export default AddReviewForm;
