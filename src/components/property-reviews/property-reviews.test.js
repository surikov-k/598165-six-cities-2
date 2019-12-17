import React from 'react';
import renderer from 'react-test-renderer';

import PropertyReviews from './property-reviews.jsx';

const reviews = [
  {
    id: 0,
    rating: 0,
    comment: ``,
    date: new Date(0),
    userName: ``,
    userAvatar: ``,
  },
  {
    id: 1,
    rating: 0,
    comment: ``,
    date: new Date(0),
    userName: ``,
    userAvatar: ``,
  },
];

describe(`<PropertyReviews/>`, () => {
  it(`renders correnctly`, () => {
    const component = renderer
      .create(<PropertyReviews
        placeId={0}
        isAuthorizationRequired={false}
        reviews={reviews}
        onReviewSubmit={() => {}}
      />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});


