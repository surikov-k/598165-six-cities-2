import {combineReducers} from 'redux';

import {
  reducer as app,
  initialState as appInitialState
} from './app/app';
import {
  reducer as data,
  initialState as dataInitialState,
} from './data/data';

const reducer = combineReducers({app, data});
const initialState = Object.assign({}, appInitialState, dataInitialState);

export {
  initialState,
  reducer,
};
