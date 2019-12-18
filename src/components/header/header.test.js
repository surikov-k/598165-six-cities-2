import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';

jest.mock(`react-router-dom`,
    () => ({
      Link: () => null,
    }));

describe(`<Header/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<Header
        isAuthorizationRequired={false}
        user={{
          id: 0,
          email: ``
        }}
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

