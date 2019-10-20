import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/app/app.jsx';
import {getPlaces} from './data';

const places = getPlaces(5);

const init = () => {
  ReactDOM.render(
      <App
        places={places}
      />,
      document.querySelector(`#root`)
  );
};

init();
