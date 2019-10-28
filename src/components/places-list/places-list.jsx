import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

export default class PlacesList extends PureComponent {

  constructor(props) {
    super(props);
    this.places = props.places;
    this.onHeaderClick = props.onHeaderClick;

    this.state = {
      activeCard: null
    };
  }

  render() {
    return (
      <div
        className="cities__places-list places__list tabs__content">
        {this.places.map((place) => {
          return <PlaceCard
            key={place.id}
            place={place}
            onMouseOver={(id) => {
              this.setState(() => ({activeCard: id}));
            }}
            onHeaderClick={this.onHeaderClick}
          />;
        })}
      </div>
    );
  }
}

PlacesList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
  })).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};

