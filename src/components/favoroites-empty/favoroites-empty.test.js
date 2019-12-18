import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesEmpty from './favoroites-empty';

jest.mock(`react-router-dom`,
    () => ({
      Link: () => null,
    }));

describe(`<FavoritesEmpty/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<FavoritesEmpty
        user={{
          id: 0,
          email: ``
        }}
        isAuthorizationRequired={false}
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

