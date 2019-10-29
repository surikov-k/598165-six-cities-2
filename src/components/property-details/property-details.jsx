import React from 'react';
import PropTypes from 'prop-types';

const PropertyDetails = (props) => {
  const {
    place,
  } = props;
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
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
              {place.images.map((image, i) => {
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
              {place.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                : null
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {place.name}
                </h1>
                <button
                  className={`property__bookmark-button
                  ${place.isBookmarked ? `property__bookmark-button--active` : ``}
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
                  <span style={{width: place.rating * 20 + `%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{place.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {place.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {place.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {place.guests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{place.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {place.insideItems.map((item, i) => {
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
                    ${place.hostIsSuper ? ` property__avatar-wrapper--pro ` : ``}
                    user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={place.hostAvatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {place.hostName}
                  </span>
                  <span className="property__user-status">
                    {place.hostIsSuper ? `Pro` : null}
                  </span>
                </div>
                <div className="property__description">
                  {place.text.map((p, i) => {
                    return (<p key={i} className="property__text">
                      {p}
                    </p>);
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

PropertyDetails.propTypes = {
  place: PropTypes.shape({
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
  }).isRequired,
};

export default PropertyDetails;
