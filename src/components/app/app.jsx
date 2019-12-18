import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import leaflet from 'leaflet';

import MainPage from '../main-page/main-page.jsx';
import PropertyDetails from '../property-details/property-details.jsx';
import SignIn from '../sign-in/sign-in.jsx';

import {ActionCreator, Operation} from '../../reducer/actions';
import {selectSortedPlaces} from '../../reducer/selectors.js';

const App = (props) => {
  const {
    allPlaces, places, cities, reviews, user,
    currentCity, activePlace, sortingOrder, isAuthorizationRequired,
    changeCity, setSorting, setActivePlace, login, loadReviews, submitReview,
    auth, isDataLoading, changeFavorite,
  } = props;

  if (isAuthorizationRequired) {
    auth();
  }

  return (
    isDataLoading ? null :
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <MainPage
                places={places}
                cities={cities}
                user={user}
                currentCity={currentCity}
                activePlace={activePlace}
                sortingOrder={sortingOrder}
                onSetSorting={setSorting}
                onActivatePlace={setActivePlace}
                onChangeCity={(city) => {
                  changeCity(city, allPlaces);
                }}
                onHeaderClick={() => {}}
                onLoginSubmit={login}
                onChangeFavorite={changeFavorite}
                leaflet={leaflet}
                isAuthorizationRequired={isAuthorizationRequired}
              />;
            }}
          />
          <Route
            path="/login/"
            exact
            render={() => {
              return <SignIn
                user={user}
                onLoginSubmit={login}
                isAuthorizationRequired={isAuthorizationRequired}
              />;
            }}
          />
          <Route
            path="/offer/:id"
            exact
            render={({match: {params: {id}}}) => {
              return <PropertyDetails
                onLoginSubmit={login}
                placeId={id}
                places={places}
                user={user}
                reviews={reviews}
                leaflet={leaflet}
                onActivatePlace={() => {}}
                onloadReviews={loadReviews}
                onReviewSubmit={submitReview}
              />;
            }}
          />
        </Switch>
      </BrowserRouter>);
};

App.propTypes = {
  allPlaces: PropTypes.array.isRequired,
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  reviews: PropTypes.array.isRequired,
  activePlace: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  changeCity: PropTypes.func.isRequired,
  sortingOrder: PropTypes.object.isRequired,
  setSorting: PropTypes.func.isRequired,
  setActivePlace: PropTypes.func.isRequired,
  isDataLoading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  loadReviews: PropTypes.func.isRequired,
  submitReview: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired,
  changeFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = ({data, app}, ownProps) => {
  return Object.assign({}, ownProps, data, app, {
    places: selectSortedPlaces(app),
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
    auth: () => dispatch(Operation.auth()),
    loadReviews: (id) => dispatch(Operation.loadReviews(id)),
    submitReview: (id, review) => dispatch(Operation.submitReview(id, review)),
    changeFavorite: (id, status) => dispatch(Operation.changeFavorite(id, status)),
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
