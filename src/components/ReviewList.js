import Review from './Review';
import PropTypes from 'prop-types';

const ReviewList = ({ movieReviews }) => {
  return (
    <div>
      {movieReviews.map((movieReview) => (
        <Review key={movieReview.id} movieReview={movieReview} />
      ))}
    </div>
  );
};

ReviewList.propTypes = {
  movieReviews: PropTypes.array,
};

export default ReviewList;
