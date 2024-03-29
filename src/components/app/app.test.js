import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';
import mockLeaflet from '../../mocks/mock-leaflet';

const places = [
  {
    id: 0,
    img: ``,
    name: ``,
    cityCoords: [0, 0],
    coords: [0, 0],
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
    coords: [0, 0],
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
    coords: [0, 0],
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
    coords: [0, 0],
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
    coords: [0, 0],
    price: 0,
    rating: 0,
    type: ``,
    isPremium: false,
    isBookmarked: false,
  },
];


const div = global.document.createElement(`div`);
div.setAttribute(`id`, `map`);
global.document.body.appendChild(div);

describe(`<App/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<App
        allPlaces={places}
        isDataLoading={false}
        currentCity={``}
        cities={[]}
        reviews={[]}
        activePlace={0}
        changeCity={() => {}}
        sortingOrder={{id: 0, value: ``}}
        setSorting={() => {}}
        getPlaces={() => {}}
        places={places}
        user={{id: 0, email: ``}}
        isAuthorizationRequired={false}
        onHeaderClick={() => {}}
        onActivatePlace={() => {}}
        leaflet={mockLeaflet}
        setActivePlace={() => {}}
        login={() => {}}
        loadReviews={() => {}}
        submitReview={() => {}}
        auth={() => {}}
        changeFavorite={() => {}}
        favorites={[]}
        getFavorites={() => {}}
        onFavoritesClick={() => {}}
      />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
