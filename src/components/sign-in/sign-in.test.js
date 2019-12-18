import React from 'react';
import renderer from 'react-test-renderer';

import {SignIn} from './sign-in.jsx';

jest.mock(`react-router-dom`,
    () => ({
      Link: () => null,
    }));

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
        isAuthorizationRequired={false}
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});


