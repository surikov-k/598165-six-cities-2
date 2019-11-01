const getRandomFromArray = (array) => {
  const idx = Math.round(Math.random() * (array.length - 1));
  return array[idx];
};

const shuffleArray = (array) => {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const propertyNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

const propertyTypes = [
  `Apartment`, `Private Room`, `House`, `Hotel`,
];

const propertyImages = [
  `img/apartment-01.jpg`,
  `img/apartment-03.jpg`,
  `img/room.jpg`,
  // `img/studio-01.jpg`,
  `img/apartment-02.jpg`,
];

const propertyInsideItems = [
  `Wi-Fi`,
  `Washing machine`,
  `Towels`,
  `Heating`,
  `Coffee machine`,
  `Baby seat`,
  `Kitchen`,
  `Dishwasher`,
  `Cabel TV`,
  `Fridge`,
];

const propertyText = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  `Eveniet sapiente neque nemo ipsa similique beatae cupiditate?`,
  `Odit in, maxime harum rem, vitae recusandae a veritatis amet error laudantium facilis culpa, possimus cum perspiciatis esse voluptas aliquam ad delectus quaerat repellendus provident.`,
  `Eum sequi et assumenda ex, iure laudantium id obcaecati harum? Ad assumenda ullam est asperiores non debitis ipsum eos?`,
];

const propertyCoordinates = [
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198],
];

const hostAvatars = [
  `img/avatar-angelina.jpg`,
  `img/avatar-max.jpg`,
];

const hostNames = [
  `Angelina`,
  `Max`,
];

export const getPlaces = (amount) => {
  return new Array(amount)
    .fill(null)
    .map(() => Object.assign({}))
    .map((place, i) => {
      return {
        id: i,
        images: shuffleArray(propertyImages)
          .slice(Math.floor(1 + Math.random() * (propertyImages.length - 1))),
        get img() {
          return this.images[Math.floor(1 + Math.random() * (this.images.length - 2))];
        },
        set img(url) {
          return url;
        },
        name: getRandomFromArray(propertyNames),
        coords: propertyCoordinates[i],
        price: Math.round(Math.random() * 120 + 80),
        rating: parseFloat((Math.random() * 5).toFixed(1)),
        type: getRandomFromArray(propertyTypes),
        bedrooms: Math.floor(1 + Math.random() * 4),
        guests: Math.floor(1 + Math.random() * 9),
        hostAvatar: getRandomFromArray(hostAvatars),
        hostName: getRandomFromArray(hostNames),
        hostIsSuper: Math.round(Math.random()) < 0.33 ? true : false,
        insideItems: shuffleArray(propertyInsideItems)
          .slice(Math.floor(3 + Math.random() * (propertyInsideItems.length - 3))),
        text: shuffleArray(propertyText)
          .slice(1 + Math.floor(Math.random() * propertyText.length - 1)),
        isPremium: Math.round(Math.random()) < 0.33 ? true : false,
        isBookmarked: Math.round(Math.random()) < 0.33 ? true : false,
      };
    });
};
