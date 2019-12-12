import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlaceCard from './place-card.jsx';

Enzyme.configure({adapter: new Adapter()});

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

const mouseOverHandler = jest.fn();

describe(`<PlaceCard/>`, () => {
  it(`calls onMouseOver callback with proper value`, () => {
    const component = shallow(<PlaceCard
      place={place}
      onHeaderClick={() => {}}
      onActivatePlace={mouseOverHandler}
    />);
    component.simulate(`mouseover`);
    expect(mouseOverHandler).toHaveBeenCalledWith(0);
  });
});
