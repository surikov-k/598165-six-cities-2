import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import leaflet from 'leaflet';

import MainPage from '../main-page/main-page.jsx';
import PropertyDetails from '../property-details/property-details.jsx';
import {ActionCreator, Operation} from '../../reducer/actions';
import {selectSortedOffers} from '../../reducer/selectors.js';


const getPageScreen = (props) => {

  const {
    allPlaces, places, cities, reviews, user,
    currentCity, activePlace, sortingOrder, isAuthorizationRequired,
    changeCity, setSorting, setActivePlace, login, loadReviews, submitReview,
  } = props;

  const placeId = allPlaces[0].id;

  switch (location.pathname) {
    case `/`:
      return <MainPage
        places={places}
        cities={cities}
        user={user}
        currentCity={currentCity}
        activePlace={activePlace}
        sortingOrder={sortingOrder}
        isAuthorizationRequired={isAuthorizationRequired}
        onSetSorting={setSorting}
        onActivatePlace={setActivePlace}
        onChangeCity={(city) => {
          changeCity(city, allPlaces);
        }}
        onHeaderClick={() => {}}
        onLoginSubmit={login}
        leaflet={leaflet}
      />;
    case `/details`:
      if (reviews === undefined) {
        loadReviews(placeId);
        return null;
      } else {
        return <PropertyDetails
          isAuthorizationRequired={isAuthorizationRequired}
          onLoginSubmit={login}
          placeId={placeId}
          places={places}
          user={user}
          reviews={reviews}
          leaflet={leaflet}
          onActivatePlace={() => {}}
          onloadReviews={loadReviews}
          onReviewSubmit={submitReview}
        />;
      }
  }
  return null;
};

const App = (props) => {
  const {isDataLoading} = props;
  return (
    <Fragment>
      {isDataLoading ? null :
        getPageScreen(props)
      }
    </Fragment>);
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
  isDataLoading: PropTypes.bool.isRequired,
};

getPageScreen.propTypes = {
  allPlaces: PropTypes.array.isRequired,
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
  loadReviews: PropTypes.func.isRequired,
  submitReview: PropTypes.func.isRequired,
};

const mapStateToProps = ({data, app}, ownProps) => {
  return Object.assign({}, ownProps, data, app, {
    places: selectSortedOffers(app),
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCity: (city, places) => {
      dispatch(ActionCreator.filterCityPlaces(city, places));
      dispatch(ActionCreator.changeCity(city));
    },
    setSorting: (option) => dispatch(ActionCreator.setSorting(option)),
    setActivePlace: (id) => dispatch(ActionCreator.setActivePlace(id)),
    login: (user) => dispatch(Operation.login(user)),
    loadReviews: (id) => dispatch(Operation.loadReviews(id)),
    submitReview: (id, review) => dispatch(Operation.submitReview(id, review)),
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
