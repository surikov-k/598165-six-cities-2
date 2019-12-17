import {
  reducer,
  initialState,
} from './data';

import {ActionType, Operation} from '../actions';

import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../api';

describe(`data reducer`, () => {
  it(`returns the initial state`, () => {
    expect(reducer(undefined, {}
    )).toEqual(initialState);
  });
});

describe(`getData`, () => {
  const raw = {
    "id": 0,
    "city": {
      "name": ``,
      "location": {
        "latitude": 0,
        "longitude": 0,
        "zoom": 0
      }
    },
    "preview_image": ``,
    "images": [],
    "title": ``,
    "is_favorite": false,
    "is_premium": false,
    "rating": 0,
    "type": ``,
    "bedrooms": 0,
    "max_adults": 0,
    "price": 0,
    "goods": [],
    "host": {
      "id": 0,
      "name": ``,
      "is_pro": false,
      "avatar_url": ``
    },
    "description": ``,
    "location": {
      "latitude": 0,
      "longitude": 0,
      "zoom": 0
    }
  };

  const result = {
    id: 0,
    cityName: ``,
    cityCoords: [0, 0],
    img: ``,
    images: [],
    name: ``,
    coords: [0, 0],
    price: 0,
    rating: 0,
    type: ``,
    bedrooms: 0,
    guests: 0,
    hostId: 0,
    hostAvatar: ``,
    hostName: ``,
    hostIsSuper: false,
    insideItems: [],
    text: ``,
    isPremium: false,
    isBookmarked: false,
  };

  it(`makes request to /hotels`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const mockApi = new MockAdapter(api);
    const dataLoader = Operation.loadData();

    mockApi.onGet(`/hotels`).reply(200, [raw]);

    return dataLoader(dispatch, undefined, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_DATA,
          payload: {places: [result], cities: [``]}
        });
      });
  });
});
