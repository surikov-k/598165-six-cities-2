import {
  reducer,
  ActionCreator,
  ActionType,
  getPlacesFor,
  setSorting,
  initialState,
} from './reducer';

// import {sortingOptions} from './components/constants';

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

  it(`filters a places list for a given city`, () => {
    expect(reducer(initialState, {
      type: ActionType.GET_PLACES,
      payload: [{}, {}]
    }
    )).toEqual(Object.assign({}, initialState, {places: [{}, {}]}));
  });

  it(`changes sorting order`, () => {
    expect(reducer(initialState, {
      type: ActionType.SET_SORTING,
      payload: setSorting(`Price: low to high`, `Amsterdam`)
    }
    )).toEqual(Object.assign({}, initialState, {
      sortingOrder: `Price: low to high`,
      places: setSorting(`Price: low to high`, `Amsterdam`).places
    }));
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

  it(`creates an expected action to get places for a city name`, () => {
    expect(ActionCreator.getPlaces(`Amsterdam`))
      .toEqual({
        type: ActionType.GET_PLACES,
        payload: getPlacesFor(`Amsterdam`)
      });
  });

  it(`creates an expected action for sorting places with a given creterion `, () => {
    expect(ActionCreator.setSorting(`Popular`, `Amsterdam`))
      .toEqual({
        type: ActionType.SET_SORTING,
        payload: setSorting(`Popular`, `Amsterdam`)
      });
  });

  it(`creates an expected action for set active place`, () =>{
    expect(ActionCreator.setActivePlace(0))
      .toEqual({
        type: ActionType.SET_ACTIVE_PLACE,
        payload: 0
      });
  });
});
