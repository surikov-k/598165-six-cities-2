import {
  reducer,
  ActionCreator,
  ActionType,
  cities,
  allPlaces,
  allReviews,
  getPlacesFor,
} from './reducer';

describe(`reducer`, () => {
  it(`returns the initial state`, () => {
    expect(reducer(undefined, {}
    )).toEqual({
      cities,
      places: allPlaces,
      reviews: allReviews,
      currentCity: cities[0],
      activeOffer: null,
    }
    );
  });

  it(`changes a current city`, () => {
    expect(reducer({
      cities,
      places: allPlaces,
      reviews: allReviews,
      currentCity: ``
    }, {
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`
    }
    )).toEqual({
      cities,
      places: allPlaces,
      reviews: allReviews,
      currentCity: `Amsterdam`
    });
  });

  it(`filters the places list for a given city`, () => {
    expect(reducer({
      cities,
      places: allPlaces,
      reviews: allReviews,
      currentCity: ``
    }, {
      type: ActionType.GET_PLACES,
      payload: [{}, {}]
    }
    )).toEqual({
      cities,
      places: [{}, {}],
      reviews: allReviews,
      currentCity: ``
    });
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
});
