import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

export default class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
    this._city = [52.38333, 4.9];
    this._zoom = 12;
  }

  render() {
    return <div
      id="map"
      ref={this._mapRef.current}
      style={{height: `inherit`}}>
    </div>;
  }

  componentDidMount() {
    const {places, leaflet} = this.props;
    this._mapInit();
    places.forEach((place) => {
      leaflet
        .marker(place.coords, this._icon)
        .addTo(this._map);
    });
  }

  _mapInit() {
    const {leaflet} = this.props;

    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });

    this._map = leaflet.map(`map`, {
      center: this._city,
      zoom: this._zoom,
      zoomControl: false,
      marker: true,
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._map.setView(this._city, this._zoom);
  }


}

Map.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    type: PropTypes.string,
    bedrooms: PropTypes.number,
    guests: PropTypes.number,
    hostAvatar: PropTypes.string,
    hostName: PropTypes.string,
    hostIsSuper: PropTypes.bool,
    insideItems: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.arrayOf(PropTypes.string),
    isPremium: PropTypes.bool,
    isBookmarked: PropTypes.bool,
  })).isRequired,
  leaflet: PropTypes.object.isRequired,
};
