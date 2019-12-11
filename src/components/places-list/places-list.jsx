import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends Component {

  constructor(props) {
    super(props);
    this.onHeaderClick = props.onHeaderClick;

    this.state = {
      activeCard: null
    };
  }

  render() {
    const places = this.props.places.slice(0, 4);
    return (
      <Fragment>
        {places.map((place) => {
          return <PlaceCard
            key={place.id}
            place={place}
            onMouseOver={(id) => {
              this.setState(() => ({activeCard: id}));
            }}
            onHeaderClick={this.onHeaderClick}
          />;
        })}
      </Fragment>
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

export default PlacesList;

