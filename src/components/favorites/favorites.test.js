import React from 'react';
import renderer from 'react-test-renderer';
import Favorities from './favorites';


jest.mock(`react-router-dom`,
    () => ({
      Link: () => null,
    }));

describe(`<Favorities/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<Favorities
        user={{
          id: 0,
          email: ``
        }}
        isAuthorizationRequired={false}
        favoritePlaces={[]}
        onChangeFavorite={() => {}}

      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

