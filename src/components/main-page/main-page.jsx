import React from 'react';
import PropTypes from 'prop-types';

import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import CitiesTabs from '../cities-tabs/cities-tabs.jsx';
import PlacesList from '../places-list/places-list.jsx';
import Sorting from '../sorting/sorting.jsx';

import Map from '../map/map.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';
import Header from '../header/header.jsx';


const PlacesListWrapped = withActiveItem(PlacesList);
const CitiesTabsWrapped = withActiveItem(CitiesTabs);

const MainPage = (props) => {
  const {
    cities,
    places,
    user,
    currentCity,
    activePlace,
    sortingOrder,
    onSetSorting,
    onHeaderClick,
    onChangeCity,
    onActivatePlace,
    leaflet,
    isAuthorizationRequired,
    onChangeFavorite,
    onFavoritesClick
  } = props;

  return (
    <div className="page page--gray page--main">
      <Header
        isAuthorizationRequired={isAuthorizationRequired}
        user={user}
        onFavoritesClick={onFavoritesClick}
      />
      <main className={`page__main page__main--index
        ${places.length ? `` : `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabsWrapped
          active={currentCity}
          cities={cities}
          onChangeCity={onChangeCity}
        />
        {
          !places.length ? <MainEmpty currentCity={currentCity} /> :
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{places.length} places to stay in {currentCity}</b>

                  <Sorting
                    sortingOrder={sortingOrder}
                    currentCity={currentCity}
                    onSetSorting={onSetSorting}
                  />

                  <div
                    className="cities__places-list places__list tabs__content">

                    <PlacesListWrapped
                      places={places}
                      onHeaderClick={onHeaderClick}
                      onActivatePlace={onActivatePlace}
                      onChangeFavorite={onChangeFavorite}
                    />
                  </div>
                </section >
                <div className="cities__right-section">
                  <section className="cities__map map" style={{height: 100 + `%`}}>
                    <Map
                      places={places}
                      leaflet={leaflet}
                      currentCity={currentCity}
                      activePlace={activePlace}
                    />
                  </section>
                </div>
              </div >
            </div >
        }
      </main >
    </div >
  );
};


MainPage.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  user: PropTypes.object.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  leaflet: PropTypes.object.isRequired,
  currentCity: PropTypes.string.isRequired,
  activePlace: PropTypes.number,
  cities: PropTypes.array.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  sortingOrder: PropTypes.object.isRequired,
  onSetSorting: PropTypes.func.isRequired,
  onActivatePlace: PropTypes.func,
  onLoginSubmit: PropTypes.func,
  onChangeFavorite: PropTypes.func,
  onFavoritesClick: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

export default MainPage;
