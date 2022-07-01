import Review from './Review';

const ReviewList = ({ movieReviews }) => {
  return (
    <div>
      {movieReviews.map((movieReview) => (
        <Review key={movieReview.id} movieReview={movieReview} />
      ))}
    </div>
  );
};

export default ReviewList;
