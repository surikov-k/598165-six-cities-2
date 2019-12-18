import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import createAPI from './api';

import {reducer} from './reducer/reducer';
import {Operation} from './reducer/actions';
import App from './components/app/app.jsx';

const history = createBrowserHistory();
const api = createAPI(
    (...args) => store.dispatch(...args),
    () => history.push(`/login`)
);

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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.querySelector(`#root`)
  );
};

init();

