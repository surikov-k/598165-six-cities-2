import {combineReducers} from 'redux';

import {
  reducer as app,
  ActionCreator as appActionCreator,
  initialState as appInitialState
} from './app/app';
import {
  reducer as data,
  ActionCreator as dataActionCreator,
  initialState as dataInitialState,
  Operation,
  sortPlaces
} from './data/data';

const reducer = combineReducers({app, data});
const initialState = Object.assign({}, appInitialState, dataInitialState);
const ActionCreator = Object.assign({}, appActionCreator, dataActionCreator);

export {
  initialState,
  reducer,
  ActionCreator,
  Operation,
  sortPlaces,
};
