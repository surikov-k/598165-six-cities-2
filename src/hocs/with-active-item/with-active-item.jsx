import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        active: this.props.active,
      };

      this._selectHandler = this._selectHandler.bind(this);
    }

    render() {
      const active = this.state.active;
      return (
        <Component
          {...this.props}
          active={active}
          onSelect={(id) => this._selectHandler(id)}
        />
      );
    }
    _selectHandler(id) {
      this.setState({
        active: id
      });
    }
  }

  WithActiveItem.propTypes = {
    active: PropTypes.any,
  };

  return WithActiveItem;
};

export default withActiveItem;

