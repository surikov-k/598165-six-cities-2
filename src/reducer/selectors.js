import {createSelector} from 'reselect';

const getCityPlaces = (app) => {
  return app.places;
};

const getSortingOrder = (app) => {
  return app.sortingOrder;
};

export const selectSortedPlaces = createSelector(
    [getCityPlaces, getSortingOrder],
    (places, order) => {
      switch (order.value) {
        case `Price: low to high`:
          return places.slice().sort((a, b) => a.price - b.price);
        case `Price: high to low`:
          return places.slice().sort((a, b) => b.price - a.price);
        case `Top rated first`:
          return places.slice().sort((a, b) => b.rating - a.rating);
      }
      return places;
    }
);
