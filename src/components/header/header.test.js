import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';

describe(`<Header/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<Header
        user={{
          id: 0,
          email: ``
        }}
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
