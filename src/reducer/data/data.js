import {ActionType} from '../actions';

const initialState = {
  isDataLoading: true,
  cities: [],
  allPlaces: [],
  reviews: [],
  isAuthorizationRequired: true,
  user: {
    id: null,
    email: ``,
    name: ``,
    avatarUrl: ``,
    isPro: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      return Object.assign({}, state, {
        allPlaces: action.payload.places,
        cities: action.payload.cities,
      });

    case ActionType.SET_AUTHORIZATION:
      return Object.assign({}, state, {isAuthorizationRequired: action.payload});

    case ActionType.SET_USER_DATA:
      return Object.assign({}, state, {user: action.payload});

    case ActionType.SET_LOADING:
      return Object.assign({}, state, {isDataLoading: action.payload});
  }
  return state;
};

export {
  initialState,
  reducer,
};
