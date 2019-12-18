import React from 'react';
import renderer from 'react-test-renderer';

import PlacesList from './places-list.jsx';

jest.mock(`react-router-dom`,
    () => ({
      Link: () => null,
    }));


const mouseOverHandler = jest.fn();
const headerClickHandler = jest.fn();

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
];

describe(`<PlacesList/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<PlacesList
        places={places}
        onActivatePlace={mouseOverHandler}
        onHeaderClick={headerClickHandler}
        onSelect={() => {}}
        onChangeFavorite={() => {}}
      />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
