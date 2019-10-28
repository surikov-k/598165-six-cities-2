import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/app/app.jsx';
import {getPlaces} from './mocks/offers';

const places = getPlaces(6);

const init = () => {
  ReactDOM.render(
      <App
        places={places}
      />,
      document.querySelector(`#root`)
  );
};

init();
