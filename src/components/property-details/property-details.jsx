import React from 'react';
import PropTypes from 'prop-types';

import PropertyReviews from '../property-reviews/property-reviews.jsx';
import Map from '../map/map.jsx';
import PlacesList from '../places-list/places-list.jsx';
import {connect} from 'react-redux';

const NEAR_PLACES_TO_DISPLAY = 3;

const PropertyDetails = (props) => {
  const {
    placeId,
    places,
    reviews,
    leaflet
  } = props;

  const getDistance = (a, b) => {
    const [xa, ya] = a.coords;
    const [xb, yb] = b.coords;
    return Math.sqrt(Math.pow((xb - xa), 2) + Math.pow((yb - ya), 2));
  };

  const currentPlace = places[placeId];

  const nearPlaces = places
    .filter((place) => place.id !== currentPlace.id)
    .sort((a, b) => getDistance(b, currentPlace) - getDistance(a, currentPlace))
    .slice(0, NEAR_PLACES_TO_DISPLAY);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentPlace.images.map((image, i) => {
                return (
                  <div key={i} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentPlace.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                : null
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentPlace.name}
                </h1>
                <button
                  className={`property__bookmark-button
                  ${currentPlace.isBookmarked ? `property__bookmark-button--active` : ``}
                  button`}
                  type="button">
                  <svg className="place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: currentPlace.rating * 20 + `%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentPlace.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentPlace.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentPlace.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentPlace.guests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentPlace.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentPlace.insideItems.map((item, i) => {
                    return (
                      <li key={i + item} className="property__inside-item">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper
                    ${currentPlace.hostIsSuper ? ` property__avatar-wrapper--pro ` : ``}
                    user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={currentPlace.hostAvatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {currentPlace.hostName}
                  </span>
                  <span className="property__user-status">
                    {currentPlace.hostIsSuper ? `Pro` : null}
                  </span>
                </div>
                <div className="property__description">
                  {currentPlace.text.map((p, i) => {
                    return (<p key={i} className="property__text">
                      {p}
                    </p>);
                  })}
                </div>
              </div>
              <PropertyReviews
                reviews={reviews}
              />
            </div>
          </div>
          <div className="property__map map">
            <Map
              leaflet={leaflet}
              places={nearPlaces}
            />
          </div>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlacesList
                places={nearPlaces}
                onHeaderClick={() => {}}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

PropertyDetails.propTypes = {
  placeId: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    type: PropTypes.string,
    bedrooms: PropTypes.number,
    guests: PropTypes.number,
    hostAvatar: PropTypes.string,
    hostName: PropTypes.string,
    hostIsSuper: PropTypes.bool,
    insideItems: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.arrayOf(PropTypes.string),
    isPremium: PropTypes.bool,
    isBookmarked: PropTypes.bool,
  })).isRequired,
  reviews: PropTypes.array.isRequired,
  leaflet: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    places: state.places,
    reviews: state.reviews,
  });
};

export {PropertyDetails};
export default connect(mapStateToProps)(PropertyDetails);
