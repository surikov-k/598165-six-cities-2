import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

const PlacesList = (props) => {
  const places = props.places.slice(0, 4);
  return (
    <Fragment>
      {places.map((place) => {
        return <PlaceCard
          key={place.id}
          place={place}
          onActivatePlace={props.onActivatePlace}
          onHeaderClick={props.onHeaderClick}
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
};

export default PlacesList;

