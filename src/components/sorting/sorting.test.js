import React from 'react';
import renderer from 'react-test-renderer';

import Sorting from './sorting';

const sortingOrder = {id: 0, value: ``};
const setSorting = () => {};
const currentCity = ``;

describe(`<Sorting/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<Sorting
        sortingOrder={sortingOrder}
        setSorting={setSorting}
        currentCity={currentCity}
        onSetSorting={() => {}}
      />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});

