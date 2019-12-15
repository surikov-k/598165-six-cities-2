import {
  reducer,
  ActionCreator,
  ActionType,
  initialState,
  Operation,
} from './reducer';

import MockAdapter from 'axios-mock-adapter';
import createAPI from './api';

describe(`reducer`, () => {
  it(`returns the initial state`, () => {
    expect(reducer(undefined, {}
    )).toEqual(initialState);
  });

  it(`changes a current city`, () => {
    expect(reducer(initialState, {
      type: ActionType.CHANGE_CITY,
      payload: `SomeCityName`
    }
    )).toEqual(Object.assign({}, initialState, {currentCity: `SomeCityName`}));
  });

  it(`changes sorting order`, () => {
    expect(reducer(initialState, {
      type: ActionType.SET_SORTING,
      payload: {id: 0, value: ``}
    }
    )).toEqual(Object.assign({}, initialState, {sortingOrder: {id: 0, value: ``}}));
  });

  it(`set active place`, () => {
    expect(reducer(initialState, {
      type: ActionType.SET_ACTIVE_PLACE,
      payload: 0
    })).toEqual(Object.assign({}, initialState, {
      activePlace: 0,
    }));
  });
});

describe(`ActionCreator`, () => {
  it(`creates an expected action to change a current city name`, () => {
    expect(ActionCreator.changeCity(`SomeName`))
      .toEqual({
        type: ActionType.CHANGE_CITY,
        payload: `SomeName`
      });
  });

  it(`creates an expected action for sorting`, () => {
    expect(ActionCreator.setSorting({id: 0, value: ``}))
      .toEqual({
        type: ActionType.SET_SORTING,
        payload: {id: 0, value: ``}
      });
  });

  it(`creates an expected action for set active place`, () => {
    expect(ActionCreator.setActivePlace(0))
      .toEqual({
        type: ActionType.SET_ACTIVE_PLACE,
        payload: 0
      });
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
