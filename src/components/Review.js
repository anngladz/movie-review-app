const Review = ({ movieReview }) => {
  return (
    <div className='review-wrapper'>
      <span>{movieReview.rating}</span>
      <p>{movieReview.text}</p>
    </div>
  );
};

export default Review;
