// import * as mock from './mocks/offers';
import {sortingOptions} from './components/constants';

// export const allPlaces = mock.getPlaces(20);
// export const allReviews = mock.getReviews();
// export const cities = [];

export const filterPlacesFor = (city, places) => {
  return places.filter((place) => place.cityName === city);
};

const getCitiesList = (places) => {
  const list = places.map((place) => place.cityName);
  return [...new Set(list)];
};

export const initialState = {
  cities: [],
  places: [],
  reviews: [],
  currentCity: ``,
  activePlace: null,
  sortingOrder: sortingOptions[0],
};


export const sortPlaces = (places, city, order) => {
  let result = filterPlacesFor(city, places);

  switch (order.value) {
    case `Popular`:
      break;

    case `Price: low to high`:
      return result.sort((a, b) => a.price - b.price);

    case `Price: high to low`:
      return result.sort((a, b) => b.price - a.price);

    case `Top rated first`:
      return result.sort((a, b) => b.rating - a.rating);
  }
  return result;
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_DATA: `LOAD_DATA`,
  SET_SORTING: `SET_SORTING`,
  SET_ACTIVE_PLACE: `SET_ACTIVE_PLACE`,
};

const ActionCreator = {
  changeCity: (city) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: city,
    };
  },

  loadData: (places, cities) => {
    return {
      type: ActionType.LOAD_DATA,
      payload: {places, cities},
    };
  },

  setSorting: (option) => {
    return {
      type: ActionType.SET_SORTING,
      payload: option,
    };
  },

  setActivePlace: (id) => {
    return {
      type: ActionType.SET_ACTIVE_PLACE,
      payload: id
    };
  }
};

const Operation = {
  loadData: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        if (response.status === 200) {
          const places = response.data.map((place) => convertRaw(place));
          const cities = getCitiesList(places);
          dispatch(ActionCreator.loadData(places, cities));
        }
      });
  },
};

const convertRaw = (place) => {
  return {
    id: place.id,
    cityName: place.city.name,
    cityCoords: [
      place.city.location.latitude,
      place.city.location.longitude,
    ],
    img: place.preview_image,
    images: place.images,
    name: place.title,
    coords: [
      place.location.latitude,
      place.location.longitude,
    ],
    price: place.price,
    rating: place.rating,
    type: place.type,
    bedrooms: place.bedrooms,
    guests: place.max_adults,
    hostId: place.host.id,
    hostAvatar: place.host.avatar_url,
    hostName: place.host.name,
    hostIsSuper: place.host.is_pro,
    insideItems: place.goods,
    text: place.description,
    isPremium: place.is_premium,
    isBookmarked: place.is_favorite,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {currentCity: action.payload});

    case ActionType.LOAD_DATA:
      return Object.assign({}, state, {
        places: action.payload.places,
        cities: action.payload.cities,
        currentCity: action.payload.cities[0]
      });

    case ActionType.SET_SORTING:
      return Object.assign({}, state, {sortingOrder: action.payload});

    case ActionType.SET_ACTIVE_PLACE:
      return Object.assign({}, state, {activePlace: action.payload});

  }
  return state;
};

export {
  reducer,
  ActionCreator,
  ActionType,
  Operation,
};
