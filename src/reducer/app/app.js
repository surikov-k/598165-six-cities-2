import {sortingOptions} from '../../components/constants';
import {ActionType} from '../actions';

const initialState = {
  currentCity: ``,
  places: [],
  reviews: undefined,
  activePlace: null,
  sortingOrder: sortingOptions[0],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        currentCity: action.payload,
      });

    case ActionType.SET_SORTING:
      return Object.assign({}, state, {sortingOrder: action.payload});

    case ActionType.SET_ACTIVE_PLACE:
      return Object.assign({}, state, {activePlace: action.payload});

    case ActionType.FILTER_CITY_PLACES:
      return Object.assign({}, state, {places: action.payload});

    case ActionType.LOAD_REVIEWS:
      return Object.assign({}, state, {reviews: action.payload});
  }
  return state;
};

export {
  initialState,
  reducer,
};
