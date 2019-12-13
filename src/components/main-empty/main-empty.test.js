import React from 'react';
import renderer from 'react-test-renderer';

import MainEmpty from './main-empty.jsx';

describe(`<MainEmpty/>`, () => {
  it(`should render well`, () => {
    const component = renderer
      .create(<MainEmpty
        currentCity=""
      />)
      .toJSON();

    expect(component).toMatchSnapshot();

  });
});
