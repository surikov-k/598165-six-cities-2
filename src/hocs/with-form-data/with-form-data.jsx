import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withFormData = (Component) => {
  class WithFormData extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {};

      this._changeHandler = this._changeHandler.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          formData={this.state}
          onChange={this._changeHandler}
        />
      );
    }
    _changeHandler(name, value) {
      this.setState({
        [name]: value
      });
    }

  }

  WithFormData.propTypes = {
    state: PropTypes.object,
  };

  return WithFormData;
};

export default withFormData;

