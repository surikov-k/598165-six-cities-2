import React from 'react';
import renderer from 'react-test-renderer';

import mockLeaflet from '../../mocks/mock-leaflet';
import PropertyDetails from './property-details.jsx';

const places = [
  {
    id: 0,
    images: [],
    img: ``,
    name: ``,
    price: 0,
    rating: 0,
    type: ``,
    bedrooms: 0,
    guests: 0,
    hostAvatar: ``,
    hostName: ``,
    hostIsSuper: false,
    insideItems: [],
    text: ``,
    isPremium: false,
    isBookmarked: false,
    cityCoords: [],
  },
];

const reviews = [];

describe(`<PropertyDetails/>`, () => {
  it(`renders correctly`, () => {
    const container = renderer
      .create(<PropertyDetails
        placeId = {0}
        places={places}
        reviews={reviews}
        leaflet={mockLeaflet}
        onSelect={() => {}}
      />)
      .toJSON();

    expect(container).toMatchSnapshot();
  });
});
