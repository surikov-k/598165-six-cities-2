import React from 'react';
import renderer from 'react-test-renderer';
import mockLeaflet from '../../mocks/mock-leaflet';

import Map from './map.jsx';

const places = [{
  coords: [0, 0],
}];


const div = global.document.createElement(`div`);
div.setAttribute(`id`, `map`);
global.document.body.appendChild(div);

describe(`<Map/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<Map
        leaflet={mockLeaflet}
        places={places}
      />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});

