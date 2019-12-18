import {ActionType} from '../actions';

const initialState = {
  isDataLoading: true,
  cities: [],
  allPlaces: [],
  favorites: [],
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
      return Object.assign({}, state, Object.assign(state.user, action.payload));

    case ActionType.SET_LOADING:
      return Object.assign({}, state, {isDataLoading: action.payload});

    case ActionType.GET_FAVORITES:
      return Object.assign({}, state, {favorites: action.payload});

    case ActionType.ADD_FAVORITE:

      return Object.assign({}, state,
          {favorites: [...state.favorites, action.payload]});

    case ActionType.REMOVE_FAVORITE:
      const indexToDelete = state.favorites
        .findIndex((place) => place.id === action.payload);
      const newFavs = state.favorites.slice();
      newFavs.splice(indexToDelete, 1);
      return Object.assign({}, state, {favorites: newFavs});

    case ActionType.UPDATE_DATA:
      const placeId = state.allPlaces
        .findIndex((place) => place.id === action.payload.id);
      const updatedPlaces = state.allPlaces.slice();
      updatedPlaces[placeId] = action.payload;
      return Object.assign({}, state, {allPlaces: updatedPlaces});
  }
  return state;
};

export {
  initialState,
  reducer,
};
