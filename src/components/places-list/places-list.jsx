import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

const PlacesList = (props) => {
  const {
    places,
    onActivatePlace,
    onHeaderClick,
    onSelect,
    onChangeFavorite,
  } = props;
  return (
    <Fragment>
      {places.map((place) => {
        return <PlaceCard
          key={place.id}
          place={place}
          onActivatePlace={onActivatePlace}
          onHeaderClick={onHeaderClick}
          onSelect={onSelect}
          onChangeFavorite={onChangeFavorite}
        />;
      })}
    </Fragment>
  );
};

PlacesList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
  })).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onActivatePlace: PropTypes.func,
  onChangeFavorite: PropTypes.func,
  onSelect: PropTypes.func,
};

export default PlacesList;

