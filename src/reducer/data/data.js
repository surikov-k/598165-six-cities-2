const initialState = {
  cities: [],
  places: [],
  reviews: [],
  isAuthorizationRequired: true,
  user: {
    id: null,
    email: ``,
    name: ``,
    avatarUrl: ``,
    isPro: false
  }
};

const ActionType = {
  LOAD_DATA: `LOAD_DATA`,
  SET_AUTHORIZATION: `SET_AUTHORIZATION`,
  SET_USER_DATA: `SET_USER_DATA`,
};

const ActionCreator = {
  loadData: (places, cities) => {
    return {
      type: ActionType.LOAD_DATA,
      payload: {places, cities},
    };
  },
  setAuthorization: (value) => {
    return {
      type: ActionType.SET_AUTHORIZATION,
      payload: value,
    };
  },
  setUserData: (data) => {
    return {
      type: ActionType.SET_USER_DATA,
      payload: data,
    };
  },
};

const Operation = {
  loadData: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        if (response.status === 200) {
          const places = response.data.map((place) => fromRawPlace(place));
          const cities = getCitiesList(places);
          dispatch(ActionCreator.loadData(places, cities));
        }
      });
  },

  login: (user) => (dispatch, _, api) => {
    return api.post(`/login`, user)
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionCreator.setAuthorization(false));
          const userData = fromRawUser(response.data);
          dispatch(ActionCreator.setUserData(userData));
        }
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      return Object.assign({}, state, {
        places: action.payload.places,
        cities: action.payload.cities,
        currentCity: action.payload.cities[0]
      });

    case ActionType.SET_AUTHORIZATION:
      return Object.assign({}, state, {isAuthorizationRequired: action.payload});

    case ActionType.SET_USER_DATA:
      return Object.assign({}, state, {user: action.payload});
  }
  return state;
};

const fromRawPlace = (place) => {
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

const fromRawUser = (user) => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    avatarUrl: user.avatar_url,
    isPro: user.is_pro
  };
};

export const filterPlacesFor = (city, places) => {
  return places.filter((place) => place.cityName === city);
};

const getCitiesList = (places) => {
  const list = places.map((place) => place.cityName);
  return [...new Set(list)];
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

export {
  initialState,
  reducer,
  ActionCreator,
  ActionType,
  Operation,
};
