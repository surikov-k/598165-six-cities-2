import * as mock from './mocks/offers';
import {sortingOptions} from './components/constants';

export const allPlaces = mock.getPlaces(60);
export const allReviews = mock.getReviews();
export const cities = mock.getCitiesList(allPlaces);

export const getPlacesFor = (city) => {
  return allPlaces.filter((place) => place.cityName === city);
};

export const initialState = {
  cities,
  places: getPlacesFor(cities[0]),
  reviews: allReviews,
  currentCity: cities[0],
  activePlace: null,
  sortingOrder: sortingOptions[0],
};


export const setSorting = (order, city) => {
  let places = [];

  switch (order.value) {
    case `Popular`:
      places = getPlacesFor(city);
      break;

    case `Price: low to high`:
      places = getPlacesFor(city).sort((a, b) => a.price - b.price);
      break;

    case `Price: high to low`:
      places = getPlacesFor(city).sort((a, b) => b.price - a.price);
      break;

    case `Top rated first`:
      places = getPlacesFor(city).sort((a, b) => b.rating - a.rating);
      break;
  }
  return {
    order,
    places,
  };
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_PLACES: `GET_PLACES`,
  SET_SORTING: `SET_SORTING`,
  SET_ACTIVE_PLACE: `SET_ACTIVE_PLACE`,
};

const ActionCreator = {
  changeCity: (city) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: city,
    };
  },

  getPlaces: (city) => {
    return {
      type: ActionType.GET_PLACES,
      payload: getPlacesFor(city),
    };
  },

  setSorting: (option, city) => {
    return {
      type: ActionType.SET_SORTING,
      payload: setSorting(option, city),
    };
  },

  setActivePlace: (id) => {
    return {
      type: ActionType.SET_ACTIVE_PLACE,
      payload: id
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {currentCity: action.payload});

    case ActionType.GET_PLACES:
      return Object.assign({}, state, {places: action.payload});

    case ActionType.SET_SORTING:
      return Object.assign({}, state, {
        sortingOrder: action.payload.order,
        places: action.payload.places,
      });

    case ActionType.SET_ACTIVE_PLACE:
      return Object.assign({}, state, {activePlace: action.payload});

  }
  return state;
};

export {
  reducer,
  ActionCreator,
  ActionType,
};
