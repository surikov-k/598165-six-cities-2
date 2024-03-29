import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainPage from "./main-page.jsx";
import mockLeaflet from '../../mocks/mock-leaflet';


Enzyme.configure({adapter: new Adapter()});

jest.mock(`react-router-dom`,
    () => ({
      Link: () => null,
    }));


const places = [
  {
    id: 0,
    img: ``,
    name: ``,
    price: 0,
    rating: 0,
    type: ``,
    isPremium: false,
    isBookmarked: false,
  },
  {
    id: 1,
    img: ``,
    name: ``,
    price: 0,
    rating: 0,
    type: ``,
    isPremium: false,
    isBookmarked: false,
  },
  {
    id: 2,
    img: ``,
    name: ``,
    price: 0,
    rating: 0,
    type: ``,
    isPremium: false,
    isBookmarked: false,
  },
  {
    id: 3,
    img: ``,
    name: ``,
    price: 0,
    rating: 0,
    type: ``,
    isPremium: false,
    isBookmarked: false,
  },
  {
    id: 4,
    img: ``,
    name: ``,
    price: 0,
    rating: 0,
    type: ``,
    isPremium: false,
    isBookmarked: false,
  },
];


describe(`<MainPage/>`, () => {
  it(`fires onClick callback after click on each place card header`, () => {
    const onClick = jest.fn();
    const component = mount(<MainPage
      isAuthorizationRequired={false}
      places={places}
      currentCity=""
      cities={[]}
      user={{id: 0, email: ``}}
      onChangeCity={() => {}}
      getPlaces={() => {}}
      onHeaderClick={onClick}
      leaflet={mockLeaflet}
      sortingOrder={{id: 0, value: ``}}
      onSetSorting={() => {}}
      onActivatePlace={() => {}}
      onChangeFavorite={() => {}}
      onFavoritesClick={() => {}}
    />
    );
    const links = component.find(`.place-card__name`);

    links.forEach((link) => {
      link.simulate(`click`);
    });

    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
