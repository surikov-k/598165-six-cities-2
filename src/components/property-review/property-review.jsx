import React from 'react';
import PropTypes from 'prop-types';

const PropertyReview = ({review}) => {
  const {
    rating,
    comment,
    date,
    userName,
    userAvatar,
  } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={userAvatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: rating * 20 + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{new Date(date).toDateString()}</time>
      </div>
    </li>
  );
};

PropertyReview.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    rating: PropTypes.number,
    comment: PropTypes.string,
    date: PropTypes.number,
    userId: PropTypes.number,
    isUserPro: PropTypes.bool,
    userName: PropTypes.string,
    userAvatar: PropTypes.string,
  }).isRequired,
};

export default PropertyReview;