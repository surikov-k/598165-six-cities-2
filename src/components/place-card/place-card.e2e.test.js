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

const mouseEnterHandler = jest.fn();
const onHeaderClick = jest.fn();
const onChangeFavorite = jest.fn();

describe(`<PlaceCard/>`, () => {
  const component = shallow(<PlaceCard
    place={place}
    onHeaderClick={onHeaderClick}
    onActivatePlace={mouseEnterHandler}
    onSelect={() => {}}
    onChangeFavorite={onChangeFavorite}
  />);

  it(`calls onMouseOver callback with proper value`, () => {
    component.simulate(`mouseenter`);
    expect(mouseEnterHandler).toHaveBeenCalledWith(0);
  });

  it(`calls onHeaderClick callback with proper value`, () => {
    const header = component.find(`.place-card__name Link`);
    header.simulate(`click`);
    expect(onHeaderClick).toHaveBeenCalledWith(0);
  });

  it(`calls onChangeFavorite callback with proper value`, () => {
    const bookmark = component.find(`button`);
    bookmark.simulate(`click`);
    expect(onChangeFavorite).toHaveBeenCalledWith(0, 1);
  });
});
