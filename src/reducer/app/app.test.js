import {
  reducer,
  initialState,
} from './app';
import {ActionType, ActionCreator} from '../actions';

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
