import React from 'react';
import renderer from 'react-test-renderer';

import PropertyDetails from './property-details.jsx';

const place = {
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
  text: [],
  isPremium: false,
  isBookmarked: false,
};

describe(`<PropertyDetails/>`, () => {
  it(`renders correctly`, () => {
    const container = renderer
      .create(<PropertyDetails
        place={place}
      />)
      .toJSON();

    expect(container).toMatchSnapshot();
  });
});
