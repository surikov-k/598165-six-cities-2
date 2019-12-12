import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {sortingOptions} from '../constants';

class Sorting extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };

    this._sortClickHandler = this._sortClickHandler.bind(this);
  }

  render() {
    const {sortingOrder, setSorting, currentCity} = this.props;
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption" style={{marginRight: 10 + `px`}}>Sort by</span>
        <span className="places__sorting-type " tabIndex="0" onClick={this._sortClickHandler}>
          {sortingOrder.value}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.isMenuOpen ? `places__options--opened` : ``}`}>
          {sortingOptions.map((option) => {
            return (
              <li
                key={option.id}
                className="places__option places__option--active"
                tabIndex="0"
                onClick={() => {
                  setSorting(option, currentCity);
                  this._sortClickHandler();
                }}
              >
                {option.value}
              </li>
            );
          }
          )}
        </ul>
      </form>
    );
  }
  _sortClickHandler() {
    this.setState((state) => ({isMenuOpen: !state.isMenuOpen}));
  }
}

Sorting.propTypes = {
  sortingOrder: PropTypes.object.isRequired,
  setSorting: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default Sorting;
