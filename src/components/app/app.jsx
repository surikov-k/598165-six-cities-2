import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {MainPage} from '../main-page/main-page.jsx';
import PropertyDetails from '../property-details/property-details.jsx';

const getPageScreen = (places) => {
  switch (location.pathname) {
    case `/`:
      return <MainPage
        places={places}
        onHeaderClick={() => {}}
        leaflet={leaflet}
      />;
    case `/details`:
      return <PropertyDetails
        place={places[0]}
      />;
  }
  return null;
};

export const App = (props) => {
  return <Fragment>
    {getPageScreen(props.places)}
  </Fragment>;
};

App.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
