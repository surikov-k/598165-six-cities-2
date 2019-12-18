import React from 'react';
import renderer from 'react-test-renderer';

import PlaceCard from "./place-card.jsx";
jest.mock(`react-router-dom`,
    () => ({
      Link: () => null,
    }));


const place = {
  id: 0,
  img: ``,
  name: ``,
  price: 0,
  rating: 0,
  type: ``,
  isPremium: false,
  isBookmarked: false,
};


describe(`<PlaceCard/>`, () => {
  it(`renders correctly`, () => {
    const componet = renderer
      .create(<PlaceCard
        place={place}
        onHeaderClick={() => {}}
        onActivatePlace={() => {}}
        onSelect={() => {}}
        onChangeFavorite={() => {}}
      />)
      .toJSON();

    expect(componet).toMatchSnapshot();
  });
});
