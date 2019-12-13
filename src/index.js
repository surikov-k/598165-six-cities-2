import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import {reducer} from './reducer';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const init = () => {
  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.querySelector(`#root`)
  );
};

init();
