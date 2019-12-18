const DEFAULT_CITY_INDEX = 0;

const ActionType = {
  LOAD_DATA: `LOAD_DATA`,
  UPDATE_DATA: `UPDATE_DATA`,
  UPDATE_PLACES: `UPDATE_PLACES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  FILTER_CITY_PLACES: `FILTER_CITY_PLACES`,
  SET_AUTHORIZATION: `SET_AUTHORIZATION`,
  SET_USER_DATA: `SET_USER_DATA`,
  SET_LOADING: `SET_LOADING`,

  CHANGE_CITY: `CHANGE_CITY`,
  SET_SORTING: `SET_SORTING`,
  SORT_PLACES: `SORT_PLACES`,
  SET_ACTIVE_PLACE: `SET_ACTIVE_PLACE`,

  GET_FAVORITES: `GET_FAVORITES`,
  ADD_FAVORITE: `ADD_FAVORITE`,
  REMOVE_FAVORITE: `REMOVE_FAVORITE`,
};

const ActionCreator = {
  loadData: (places, cities) => {
    return {
      type: ActionType.LOAD_DATA,
      payload: {places, cities},
    };
  },

  updateData: (place) => {
    return {
      type: ActionType.UPDATE_DATA,
      payload: place,
    };
  },

  updatePlaces: (place) => {
    return {
      type: ActionType.UPDATE_PLACES,
      payload: place,
    };
  },

  filterCityPlaces: (city, places) => {
    return {
      type: ActionType.FILTER_CITY_PLACES,
      payload: filterCityPlaces(city, places),
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

  setLoading: (value) => {
    return {
      type: ActionType.SET_LOADING,
      payload: value,
    };
  },

  changeCity: (city) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: city,
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
  },

  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },

  getFavorites: (places) => {
    return {
      type: ActionType.GET_FAVORITES,
      payload: places,
    };
  },

  addFavorite: (place) => {
    return {
      type: ActionType.ADD_FAVORITE,
      payload: place
    };
  },

  removeFavorite: (id) => {
    return {
      type: ActionType.REMOVE_FAVORITE,
      payload: id,
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
          const currentCity = cities[DEFAULT_CITY_INDEX];
          dispatch(ActionCreator.loadData(places, cities));
          dispatch(ActionCreator.changeCity(currentCity));
          dispatch(ActionCreator.filterCityPlaces(currentCity, places));
          dispatch(ActionCreator.setLoading(false));
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

  auth: () => (dispatch, _, api) => {
    return api.get(`/login`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionCreator.setAuthorization(false));
          const userData = fromRawUser(response.data);
          dispatch(ActionCreator.setUserData(userData));
        }
      });
  },

  loadReviews: (id) => (dispatch, _, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        if (response.status === 200) {
          const reviews = response.data.map((review) => fromRawReview(review));
          dispatch(ActionCreator.loadReviews(reviews));
        }
      });
  },

  submitReview: (id, review) => (dispatch, _, api) => {
    return api.post(`/comments/${id}`, review)
      .then((response) => {
        if (response.status === 200) {
          const reviews = response.data.map((raw) => fromRawReview(raw));
          dispatch(ActionCreator.loadReviews(reviews));
        }
      });
  },

  getFavorites: () => (dispatch, _, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const places = response.data.map((place) => fromRawPlace(place));
        dispatch(ActionCreator.getFavorites(places));
      });
  },

  changeFavorite: (id, status) => (dispatch, _, api) => {
    return api.post(`/favorite/${id}/${status}`)
      .then((response) => {
        if (response.status === 200) {
          const place = fromRawPlace(response.data);
          dispatch(ActionCreator.updateData(place));
          dispatch(ActionCreator.updatePlaces(place));

          if (status === 1) {
            dispatch(ActionCreator.addFavorite(place));
          } else {
            dispatch(ActionCreator.removeFavorite(id));
          }
        }
      });
  },
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

const fromRawReview = (review) => {
  return {
    id: review.id,
    rating: review.rating,
    comment: review.comment,
    date: new Date(review.date),
    userId: review.user.id,
    isUserPro: review.user.is_pro,
    userName: review.user.name,
    userAvatar: review.user.avatar_url,
  };
};

export const filterCityPlaces = (city, places) => {
  return places.filter((place) => place.cityName === city);
};

const getCitiesList = (places) => {
  const list = places.map((place) => place.cityName);
  return [...new Set(list)];
};

export {
  ActionType,
  ActionCreator,
  Operation,
};
