import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import leaflet from 'leaflet';

import MainPage from '../main-page/main-page.jsx';
import PropertyDetails from '../property-details/property-details.jsx';
import SignIn from '../sign-in/sign-in.jsx';

import {ActionCreator, Operation} from '../../reducer/actions';
import {selectSortedPlaces} from '../../reducer/selectors.js';
import Favorities from '../favorites/favorites.jsx';

const App = (props) => {
  const {
    allPlaces, places, cities, reviews, user, favorites,
    currentCity, activePlace, sortingOrder, isAuthorizationRequired,
    changeCity, setSorting, setActivePlace, login, loadReviews, submitReview,
    auth, isDataLoading, changeFavorite, getFavorites,
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
                onHeaderClick={loadReviews}
                onLoginSubmit={login}
                onChangeFavorite={changeFavorite}
                leaflet={leaflet}
                isAuthorizationRequired={isAuthorizationRequired}
                onFavoritesClick={getFavorites}
              />;
            }}
          />
          <Route
            path="/login/"
            exact
            render={() => {
              return isAuthorizationRequired ? <SignIn
                user={user}
                onLoginSubmit={login}
                isAuthorizationRequired={isAuthorizationRequired}
                onFavoritesClick={getFavorites}
              /> :
                <Redirect to="/" />;
            }}
          />
          <Route
            path="/offer/:id"
            exact
            render={({match: {params: {id}}}) => {
              return <PropertyDetails
                onLoginSubmit={login}
                currentPlace={places[places.findIndex((it) => it.id === parseInt(id, 10))]}
                places={places}
                user={user}
                reviews={reviews}
                leaflet={leaflet}
                activePlace={activePlace}
                onActivatePlace={setActivePlace}
                onloadReviews={loadReviews}
                onReviewSubmit={submitReview}
                onHeaderClick={loadReviews}
                onChangeFavorite={changeFavorite}
                isAuthorizationRequired={isAuthorizationRequired}
                onFavoritesClick={getFavorites}
              />;
            }}
          />
          <Route
            path="/favorites"
            exact
            render={() => {
              return <Favorities
                user={user}
                isAuthorizationRequired={isAuthorizationRequired}
                favoritePlaces={favorites}
                onChangeFavorite={changeFavorite}
              />;
            }}
          />
        </Switch>
      </BrowserRouter>);
};

App.propTypes = {
  allPlaces: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
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
  getFavorites: PropTypes.func.isRequired,
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
    getFavorites: () => dispatch(Operation.getFavorites()),
    changeFavorite: (id, status) => dispatch(Operation.changeFavorite(id, status)),
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
