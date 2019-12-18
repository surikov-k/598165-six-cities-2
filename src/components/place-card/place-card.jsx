import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PlaceCard = (props) => {
  const {
    place,
    onHeaderClick,
    onActivatePlace,
    onSelect,
    onChangeFavorite,
    cardType,
  } = props;

  const articalStyle = cardType === `favorites` ?
    `favorites__card place-card` :
    `cities__place-card place-card`;

  const wrapperStyle = cardType === `favorites` ?
    `favorites__image-wrapper place-card__image-wrapper` :
    `cities__image-wrapper place-card__image-wrapper`;

  const infoStyle = cardType === `favorites` ?
    `favorites__card-info place-card__info` :
    `place-card__info`;

  const picSize = cardType === `favorites` ?
    {width: 150, height: 110} :
    {width: 260, height: 200};

  return (
    <article
      className={articalStyle}
      onMouseEnter={() => {
        onActivatePlace(place.id);
        onSelect(place.id);
      }}
      onMouseLeave={() => {
        onActivatePlace(-1);
        onSelect(place.id);
      }}
    >
      {
        place.isPremium
          ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : null
      }
      <div className={wrapperStyle}>
        <a href="#">
          <img className="place-card__image" src={place.img} width={picSize.width} height={picSize.height} alt="Place image" />
        </a>
      </div>
      <div className={infoStyle}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button
            ${place.isBookmarked ? ` place-card__bookmark-button--active ` : ``}
            button`}
            type="button"
            onClick={() => {
              const status = place.isBookmarked ? 0 : 1;
              onChangeFavorite(place.id, status);
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: place.rating * 20 + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`/offer/${place.id}`}
            onClick={() => onHeaderClick(place.id)}>{place.name}
          </Link>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
  }).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onActivatePlace: PropTypes.func,
  onSelect: PropTypes.func.isRequired,
  onChangeFavorite: PropTypes.func.isRequired,
  cardType: PropTypes.string,
};

export default PlaceCard;
