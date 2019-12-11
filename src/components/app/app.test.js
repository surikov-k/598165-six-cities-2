import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';
import mockLeaflet from '../../mocks/mock-leaflet';

const places = [
  {
    id: 0,
    img: ``,
    name: ``,
    coords: [0, 0],
    price: 0,
    rating: 0,
    type: ``,
    isPremium: false,
    isBookmarked: false,
  },
  {
    id: 1,
    img: ``,
    name: ``,
    coords: [0, 0],
    price: 0,
    rating: 0,
    type: ``,
    isPremium: false,
    isBookmarked: false,
  },
  {
    id: 2,
    img: ``,
    name: ``,
    coords: [0, 0],
    price: 0,
    rating: 0,
    type: ``,
    isPremium: false,
    isBookmarked: false,
  },
  {
    id: 3,
    img: ``,
    name: ``,
    coords: [0, 0],
    price: 0,
    rating: 0,
    type: ``,
    isPremium: false,
    isBookmarked: false,
  },
  {
    id: 4,
    img: ``,
    name: ``,
    coords: [0, 0],
    price: 0,
    rating: 0,
    type: ``,
    isPremium: false,
    isBookmarked: false,
  },
];


const div = global.document.createElement(`div`);
div.setAttribute(`id`, `map`);
global.document.body.appendChild(div);

describe(`<App/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<App
        currentCity={``}
        cities={[]}
        changeCity={() => {}}
        getPlaces={() => {}}
        places={places}
        onHeaderClick={() => {}}
        leaflet={mockLeaflet}
      />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
