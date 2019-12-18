import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import FavoritesEmpty from '../favoroites-empty/favoroites-empty.jsx';
import FavoritesLocations from '../favorites-locations/favorites-locations.jsx';
import Header from '../header/header.jsx';


const Favorities = (props) => {
  const {
    user,
    isAuthorizationRequired,
    favoritePlaces,
    onChangeFavorite,
  } = props;

  const getLocations = (places) => [...new Set(places.map((place) => place.cityName))];

  const favoritesLocations = getLocations(favoritePlaces);

  const getFavoritesFor = (cityName, favorites) => favorites
    .filter((place) => place.cityName === cityName);


  return favoritePlaces.length === 0 ?
    <FavoritesEmpty
      isAuthorizationRequired={isAuthorizationRequired}
      user={user}
    /> : (
      <div className="page">
        <Header
          user={user}
          isAuthorizationRequired={isAuthorizationRequired}
          onFavoritesClick={() => {}}
        />


        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoritesLocations.map((city) => {
                  return (
                    <FavoritesLocations
                      key={city}
                      city={city}
                      places={getFavoritesFor(city, favoritePlaces)}
                      onChangeFavorite={onChangeFavorite}
                    />
                  );
                })}
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link to="/" className="footer__logo-link">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      </div>
    );
};

Favorities.propTypes = {
  user: PropTypes.object.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  favoritePlaces: PropTypes.array.isRequired,
  onChangeFavorite: PropTypes.func.isRequired,
};

export default Favorities;
