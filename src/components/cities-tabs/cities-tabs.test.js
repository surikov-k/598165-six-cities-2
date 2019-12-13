import React from 'react';
import renderer from 'react-test-renderer';

import CitiesTabs from './cities-tabs.jsx';

describe(`<CitiesTabs/>`, () => {
  it(`should render correctly`, () => {
    const component = renderer
      .create(<CitiesTabs
        currentCity={``}
        cities={[]}
        onChangeCity={() => {}}
        active={0}
      />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
