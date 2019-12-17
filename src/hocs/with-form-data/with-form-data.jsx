import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withFormData = (Component) => {
  class WithFormData extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isValid: false,
      };

      this._changeHandler = this._changeHandler.bind(this);
      this._setValid = this._setValid.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          formData={this.state}
          onChange={this._changeHandler}
          setValid={this._setValid}
        />
      );
    }
    _changeHandler(evt, validator = () => {}) {
      const {target: {name}, target: {value}} = evt;
      this.setState({
        [name]: value
      }, () => validator(this.state));
    }

    _setValid(value) {
      this.setState({
        isValid: value
      });
    }

  }

  WithFormData.propTypes = {
    state: PropTypes.object,
  };

  return WithFormData;
};

export default withFormData;
