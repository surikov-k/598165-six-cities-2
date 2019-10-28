import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

const places = [
  {
    id: 0,
    img: ``,
    name: ``,
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
    price: 0,
    rating: 0,
    type: ``,
    isPremium: false,
    isBookmarked: false,
  },
];

describe(`<App/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(
          <App
            places={places}
            onHeaderClick={() => {}}
          />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
