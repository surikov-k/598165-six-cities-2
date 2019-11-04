import React from 'react';
import renderer from 'react-test-renderer';

import PropertyReview from './property-review.jsx';

const review = {
  rating: 0,
  comment: ``,
  date: 0,
  userName: ``,
  userAvatar: ``,
};

describe(`<PropertyReview/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<PropertyReview
        review={review}
      />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});

