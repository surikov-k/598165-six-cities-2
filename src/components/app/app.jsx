import React from 'react';
import PropTypes from 'prop-types';

import {MainPage} from '../main-page/main-page.jsx';

export const App = (props) => {
  const {places} = props;
  return (
    <MainPage
      places={places}
      onHeaderClick={() => {}}
    />
  );
};

App.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
