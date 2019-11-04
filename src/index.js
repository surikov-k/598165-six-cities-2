import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/app/app.jsx';
import {getPlaces, getReviews} from './mocks/offers';

const places = getPlaces(4);
const reviews = getReviews();

const init = () => {
  ReactDOM.render(
      <App
        places={places}
        reviews={reviews}
      />,
      document.querySelector(`#root`)
  );
};

init();
