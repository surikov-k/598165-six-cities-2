import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesLocations from './favorites-locations';

jest.mock(`react-router-dom`,
    () => ({
      Link: () => null,
    }));

describe(`<FavoritesLocations/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<FavoritesLocations
        city=""
        places={[]}
        onChangeFavorite={() => {}}
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

