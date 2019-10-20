const placeCardNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
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
      place.name = getRandomFromArray(placeCardNames);
      return place;
    });
};
