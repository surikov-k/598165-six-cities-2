import React from 'react';
import renderer from 'react-test-renderer';

import {SignIn} from './sign-in.jsx';

describe(`<SignIn/>`, () => {
  it(`should render correnctly`, () => {
    const component = renderer
      .create(<SignIn
        onLoginSubmit={() => {}}
        formData={{}}
        onChange={() => {}}
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});


