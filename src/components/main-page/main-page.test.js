import React from 'react';
import renderer from 'react-test-renderer';

import {MainPage} from './main-page.jsx';

const places = [
  {
    id: 0,
    name: ``,
  },
  {
    id: 0,
    name: ``,
  },
  {
    id: 0,
    name: ``,
  },
  {
    id: 0,
    name: ``,
  },
  {
    id: 0,
    name: ``,
  },
];

describe(`<MainPage/>`, () => {
  it(`renderes correctly`, () => {
    const component = renderer
      .create(
          <MainPage
            places={places}
            onHeaderClick={() => {}}
          />)
      .toJSON();

    expect(component).toMatchSnapshot();

  });
});
