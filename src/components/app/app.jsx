import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {MainPage} from '../main-page/main-page.jsx';
import PropertyDetails from '../property-details/property-details.jsx';

const getPageScreen = ({places, reviews}) => {
  switch (location.pathname) {
    case `/`:
      return <MainPage
        places={places}
        onHeaderClick={() => {}}
        leaflet={leaflet}
      />;
    case `/details`:
      return <PropertyDetails
        placeId={0}
        places={places}
        reviews={reviews}
        leaflet={leaflet}
      />;
  }
  return null;
};

export const App = (props) => {
  return <Fragment>
    {getPageScreen(props)}
  </Fragment>;
};

App.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

getPageScreen.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  reviews: PropTypes.array.isRequired,
};
