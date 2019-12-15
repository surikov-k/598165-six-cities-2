// import * as mock from './mocks/offers';
import {sortingOptions} from '../../components/constants';

const initialState = {
  currentCity: ``,
  activePlace: null,
  sortingOrder: sortingOptions[0],
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
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

  setSorting: (option) => {
    return {
      type: ActionType.SET_SORTING,
      payload: option,
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

    case ActionType.SET_SORTING:
      return Object.assign({}, state, {sortingOrder: action.payload});

    case ActionType.SET_ACTIVE_PLACE:
      return Object.assign({}, state, {activePlace: action.payload});
  }
  return state;
};

export {
  initialState,
  reducer,
  ActionCreator,
  ActionType,
};
