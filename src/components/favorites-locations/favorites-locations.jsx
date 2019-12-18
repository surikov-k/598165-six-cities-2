import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import PlaceCard from '../place-card/place-card.jsx';

const FavoritesLocations = (props) => {
  const {
    city,
    places,
    onChangeFavorite,
  } = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            to="/"
            className="locations__item-link"
          >
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {places.map((place) => {
          return (
            <PlaceCard
              key={place.id}
              cardType="favorites"
              onCardMouseEnter={() => {}}
              place={place}
              onHeaderClick={() => {}}
              onActivatePlace={() => {}}
              onSelect={() => {}}
              onChangeFavorite={onChangeFavorite}
            />
          );
        })}
      </div>
    </li>
  );
};

FavoritesLocations.propTypes = {
  city: PropTypes.string.isRequired,
  places: PropTypes.array.isRequired,
  onChangeFavorite: PropTypes.func.isRequired,
};

export default FavoritesLocations;

