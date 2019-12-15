import React from 'react';
import PropTypes from 'prop-types';

const CitiesTabs = ({active, cities, onChangeCity, onSelect}) => {
  const currentCity = active || cities[0];

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city, i) => {
              return (
                <li key={`${city}-${i}`} className="locations__item">
                  <a
                    className={`locations__item-link tabs__item ${city === currentCity && `tabs__item--active`}`}
                    onClick={() => {
                      onChangeCity(city);
                      onSelect(city);
                    }}
                  >
                    <span>{city}</span>
                  </a>
                </li>
              );
            })
          }
        </ul>
      </section>
    </div>
  );

};

CitiesTabs.propTypes = {
  active: PropTypes.any,
  onChangeCity: PropTypes.func.isRequired,
  onSelect: PropTypes.func,
  cities: PropTypes.array.isRequired,
};

export default CitiesTabs;
