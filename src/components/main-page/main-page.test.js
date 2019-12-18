import React from 'react';
import renderer from 'react-test-renderer';

import MainPage from './main-page.jsx';
import mockLeaflet from '../../mocks/mock-leaflet';

jest.mock(`react-router-dom`,
    () => ({
      Link: () => null,
    }));

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
  {
    id: 2,
    img: ``,
    name: ``,
    price: 0,
    rating: 0,
    type: ``,
    isPremium: false,
    isBookmarked: false,
  },
  {
    id: 3,
    img: ``,
    name: ``,
    price: 0,
    rating: 0,
    type: ``,
    isPremium: false,
    isBookmarked: false,
  },
  {
    id: 4,
    img: ``,
    name: ``,
    price: 0,
    rating: 0,
    type: ``,
    isPremium: false,
    isBookmarked: false,
  },
];

describe(`<MainPage/>`, () => {
  it(`renderes correctly`, () => {
    const component = renderer
      .create(<MainPage
        places={places}
        currentCity=""
        cities={[]}
        user={{id: 0, email: ``}}
        onChangeCity={() => {}}
        getPlaces={() => {}}
        onHeaderClick={() => {}}
        leaflet={mockLeaflet}
        onSetSorting={() => {}}
        onActivatePlace={() => {}}
        isAuthorizationRequired={false}
        sortingOrder={{id: 0, value: ``}}
        onChangeFavorite={() => {}}
      />)
      .toJSON();

    expect(component).toMatchSnapshot();

  });
});
