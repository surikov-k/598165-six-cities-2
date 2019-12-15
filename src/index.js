import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import createAPI from './api';

import {reducer, Operation} from './reducer';
import App from './components/app/app.jsx';

const api = createAPI((...args) => store.dispatch(...args));

const store = createStore(reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ?
          window.__REDUX_DEVTOOLS_EXTENSION__() :
          (f) => f
    )
);

const init = () => {
  store.dispatch(Operation.loadData());
  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.querySelector(`#root`)
  );
};

init();
