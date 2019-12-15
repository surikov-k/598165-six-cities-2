import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import leaflet from 'leaflet';

import MainPage from '../main-page/main-page.jsx';
import PropertyDetails from '../property-details/property-details.jsx';
import {ActionCreator, Operation} from '../../reducer/reducer';
import {sortPlaces} from '../../reducer/reducer';


const getPageScreen = (props) => {

  const {
    places, cities, reviews, user,
    currentCity, activePlace, sortingOrder, isAuthorizationRequired,
    changeCity, setSorting, setActivePlace, login,
  } = props;

  switch (location.pathname) {
    case `/`:
      return <MainPage
        places={sortPlaces(places, currentCity, sortingOrder)}
        cities={cities}
        user={user}
        currentCity={currentCity}
        activePlace={activePlace}
        sortingOrder={sortingOrder}
        isAuthorizationRequired={isAuthorizationRequired}
        onSetSorting={setSorting}
        onActivatePlace={setActivePlace}
        onChangeCity={(city) => {
          changeCity(city);
        }}
        onHeaderClick={() => {}}
        onLoginSubmit={login}
        leaflet={leaflet}
      />;
    case `/details`:
      return <PropertyDetails
        placeId={0}
        places={places}
        user={user}
        reviews={reviews}
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
  user: PropTypes.object.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
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
  user: PropTypes.object.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  reviews: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  activePlace: PropTypes.number.isRequired,
  changeCity: PropTypes.func.isRequired,
  sortingOrder: PropTypes.object.isRequired,
  setSorting: PropTypes.func.isRequired,
  setActivePlace: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = ({data, app}, ownProps) => {
  return Object.assign({}, ownProps, data, app);
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCity: (city) => dispatch(ActionCreator.changeCity(city)),
    setSorting: (option) => dispatch(ActionCreator.setSorting(option)),
    setActivePlace: (id) => dispatch(ActionCreator.setActivePlace(id)),
    login: (user) => dispatch(Operation.login(user)),
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
