import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import leaflet from 'leaflet';

import MainPage from '../main-page/main-page.jsx';
import PropertyDetails from '../property-details/property-details.jsx';
import {ActionCreator} from '../../reducer.js';

const getPageScreen = ({places, currentCity, cities, changeCity, getPlaces}) => {
  switch (location.pathname) {
    case `/`:
      return <MainPage
        places={places}
        cities={cities}
        currentCity={currentCity}
        onChangeCity={(city) => {
          changeCity(city);
          getPlaces(city);
        }}
        onHeaderClick={() => {}}
        leaflet={leaflet}
      />;
    case `/details`:
      return <PropertyDetails
        placeId={0}
        leaflet={leaflet}
      />;
  }
  return null;
};

const App = (props) => {
  return <Fragment>
    {getPageScreen(props)}
  </Fragment>;
};

App.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  getPlaces: PropTypes.func.isRequired,
  changeCity: PropTypes.func.isRequired,
};

getPageScreen.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  reviews: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  getPlaces: PropTypes.func.isRequired,
  changeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, state);
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCity: (city) => dispatch(ActionCreator.changeCity(city)),
    getPlaces: (city) => dispatch(ActionCreator.getPlaces(city)),
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
