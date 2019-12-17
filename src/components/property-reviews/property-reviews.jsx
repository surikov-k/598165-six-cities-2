import React from 'react';
import PropTypes from 'prop-types';
import PropertyReview from '../property-review/property-review.jsx';
import ReviewSubmit from '../review-submit/review-submit.jsx';

const PropertyReviews = (props) => {
  const {isAuthorizationRequired, placeId, reviews, onReviewSubmit} = props;

  const reviewsSorted = reviews
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 10);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviewsSorted.map((review) => <PropertyReview
            key={review.id}
            review={review}
          />)
        }
      </ul>
      {
        isAuthorizationRequired ? null :
          <ReviewSubmit
            placeId={placeId}
            onReviewSubmit={onReviewSubmit}
          />
      }
    </section>
  );
};

PropertyReviews.propTypes = {
  placeId: PropTypes.number.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        rating: PropTypes.number,
        comment: PropTypes.string,
        date: PropTypes.date,
        userId: PropTypes.number,
        isUserPro: PropTypes.bool,
        userName: PropTypes.string,
        userAvatar: PropTypes.string,
      })
  ).isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
};

export default PropertyReviews;
