import React from 'react';
import PropTypes from 'prop-types';

import {MainPage} from '../main-page/main-page.jsx';

export const App = (props) => {
  const {places, onHeaderClick} = props;
  return (
    <MainPage
      places={places}
      onHeaderClick={onHeaderClick}
    />
  );
};

App.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};
