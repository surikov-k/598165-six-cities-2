import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

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
