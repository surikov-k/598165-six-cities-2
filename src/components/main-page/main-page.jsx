import React, {PureComponent} from 'react';
// import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CitiesTabs from '../cities-tabs/cities-tabs.jsx';
import PlacesList from '../places-list/places-list.jsx';
import Sorting from '../sorting/sorting.jsx';

import Map from '../map/map.jsx';

class MainPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlaceId: null,
    };
    this._activePlaceHandler = this._activePlaceHandler.bind(this);
  }

  render() {
    const {
      currentCity,
      cities,
      places,
      sortingOrder,
      setSorting,
      leaflet,
      onHeaderClick,
      onChangeCity} = this.props;

    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CitiesTabs
            currentCity={currentCity}
            cities={cities}
            onChangeCity={onChangeCity}
          />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{places.length} places to stay in {currentCity}</b>

                <Sorting
                  sortingOrder={sortingOrder}
                  currentCity={currentCity}
                  setSorting={setSorting}
                />

                <div
                  className="cities__places-list places__list tabs__content">

                  <PlacesList
                    places={places}
                    onHeaderClick={onHeaderClick}
                    onActivatePlace={(id) => this._activePlaceHandler(id)}
                  />
                </div>
              </section >
              <div className="cities__right-section">
                <section className="cities__map map" style={{height: 823 + `px`}}>
                  <Map
                    places={places}
                    leaflet={leaflet}
                    activePlaceId={this.state.activePlaceId}
                  />
                </section>
              </div>
            </div >
          </div >
        </main >
      </div >
    );
  }

  _activePlaceHandler(id) {
    this.setState({activePlaceId: id});
  }
}

MainPage.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  leaflet: PropTypes.object.isRequired,
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  sortingOrder: PropTypes.object.isRequired,
  setSorting: PropTypes.func.isRequired,

};

export default MainPage;

