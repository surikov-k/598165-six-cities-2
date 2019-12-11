import React from 'react';
import PropTypes from 'prop-types';

const CitiesTabs = ({currentCity, cities, onChangeCity}) => {

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
  currentCity: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

export default CitiesTabs;
