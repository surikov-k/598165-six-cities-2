import React from 'react';
import renderer from 'react-test-renderer';

import {SignIn} from './sign-in.jsx';

const user = {
  id: 0,
  email: ``
};

describe(`<SignIn/>`, () => {
  it(`should render correnctly`, () => {
    const component = renderer
      .create(<SignIn
        user={user}
        onLoginSubmit={() => {}}
        formData={{}}
        onChange={() => {}}
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});


