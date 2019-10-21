import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {MainPage} from "./main-page.jsx";

Enzyme.configure({adapter: new Adapter()});

const places = [
  {
    id: 0,
    name: ``,
  },
  {
    id: 0,
    name: ``,
  },
  {
    id: 0,
    name: ``,
  },
  {
    id: 0,
    name: ``,
  },
  {
    id: 0,
    name: ``,
  },
];

describe(`<MainPage/>`, () => {
  it(`fires onClick callback after click on each place card header`, () => {
    const onClick = jest.fn();
    const component = shallow(
        <MainPage
          places={places}
          onHeaderClick={onClick}
        />
    );
    const links = component.find(`.place-card__name a`);

    links.forEach((link) => {
      link.simulate(`click`);
    });

    expect(onClick).toHaveBeenCalledTimes(5);
  });
});
