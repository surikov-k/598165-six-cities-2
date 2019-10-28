const placeCardNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

const placeTypes = [
  `Apartment`, `Private Room`,
];

const getRandomFromArray = (array) => {
  const idx = Math.round(Math.random() * (array.length - 1));
  return array[idx];
};


export const getPlaces = (amount) => {
  return new Array(amount)
    .fill(null)
    .map(() => Object.assign({}))
    .map((place, i) => {
      place.id = i;
      place.img = `img/apartment-0${Math.round(Math.random() * 2 + 1)}.jpg`;
      place.name = getRandomFromArray(placeCardNames);
      place.price = Math.round(Math.random() * 120 + 80);
      place.rating = Math.random() * 100;
      place.type = getRandomFromArray(placeTypes);
      place.isPremium = Boolean(Math.round(Math.random()));
      place.isBookmarked = Boolean(Math.round(Math.random()));
      return place;
    });
};
