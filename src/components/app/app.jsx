import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import leaflet from 'leaflet';

import MainPage from '../main-page/main-page.jsx';
import PropertyDetails from '../property-details/property-details.jsx';
import {ActionCreator, sortPlaces} from '../../reducer.js';

const getPageScreen = ({
  places,
  currentCity,
  activePlace,
  cities,
  sortingOrder,
  changeCity,
  setSorting,
  setActivePlace,
}) => {
  switch (location.pathname) {
    case `/`:
      return <MainPage
        places={sortPlaces(places, currentCity, sortingOrder)}
        cities={cities}
        currentCity={currentCity}
        activePlace={activePlace}
        sortingOrder={sortingOrder}
        onSetSorting={setSorting}
        onActivatePlace={setActivePlace}
        onChangeCity={(city) => {
          changeCity(city);
        }}
        onHeaderClick={() => {}}
        leaflet={leaflet}
      />;
    case `/details`:
      return <PropertyDetails
        placeId={0}
        places={places}
        leaflet={leaflet}
        onActivatePlace={() => {}}
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
  changeCity: PropTypes.func.isRequired,
  sortingOrder: PropTypes.object.isRequired,
  setSorting: PropTypes.func.isRequired,
};

getPageScreen.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  reviews: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  activePlace: PropTypes.number.isRequired,
  // getPlaces: PropTypes.func.isRequired,
  changeCity: PropTypes.func.isRequired,
  sortingOrder: PropTypes.object.isRequired,
  setSorting: PropTypes.func.isRequired,
  setActivePlace: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, state);
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCity: (city) => dispatch(ActionCreator.changeCity(city)),
    setSorting: (option) => dispatch(ActionCreator.setSorting(option)),
    setActivePlace: (id) => dispatch(ActionCreator.setActivePlace(id)),
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
