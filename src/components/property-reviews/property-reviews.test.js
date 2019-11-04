import React from 'react';
import renderer from 'react-test-renderer';

import PropertyReviews from './property-reviews.jsx';

const reviews = [
  {
    rating: 0,
    comment: ``,
    date: 0,
    userName: ``,
    userAvatar: ``,
  },
  {
    rating: 0,
    comment: ``,
    date: 0,
    userName: ``,
    userAvatar: ``,
  },
];

describe(`<PropertyReviews/>`, () => {
  it(`renders correnctly`, () => {
    const component = renderer
      .create(<PropertyReviews
        reviews={reviews}
      />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});


