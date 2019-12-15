const initialState = {
  cities: [],
  places: [],
  reviews: [],
};

const ActionType = {
  LOAD_DATA: `LOAD_DATA`,
};

const ActionCreator = {
  loadData: (places, cities) => {
    return {
      type: ActionType.LOAD_DATA,
      payload: {places, cities},
    };
  },
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      return Object.assign({}, state, {
        places: action.payload.places,
        cities: action.payload.cities,
        currentCity: action.payload.cities[0]
      });
  }
  return state;
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
