import * as mock from './mocks/offers';
export const allPlaces = mock.getPlaces(600);
export const allReviews = mock.getReviews();
export const cities = mock.getCitiesList(allPlaces);

const initialState = {
  cities,
  places: allPlaces,
  reviews: allReviews,
  currentCity: cities[0],
  activeOffer: null,
};

export const getPlacesFor = (city) => {
  return allPlaces.filter((place) => place.cityName === city);
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_PLACES: `GET_PLACES`,
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {currentCity: action.payload});

    case ActionType.GET_PLACES:
      return Object.assign({}, state, {places: action.payload});

  }
  return state;
};

export {
  reducer,
  ActionCreator,
  ActionType,
};
