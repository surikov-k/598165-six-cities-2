import React from 'react';
import PropTypes from 'prop-types';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withFormData from './with-form-data.jsx';

configure({adapter: new Adapter()});

const Component = ({onChange}) => (<div>
  <input type="text" onChange={() => onChange(`name`, `value`)}/>
</div>);
Component.propTypes = {
  onChange: PropTypes.func,
};

const ComponentWrapped = withFormData(Component);

describe(`HOC withFormData should`, () => {
  it(`sets state correctly`, () => {
    const component = mount(<ComponentWrapped
    />);
    const input = component.find(`input`);
    input.simulate(`change`);
    expect(component.state(`name`)).toEqual(`value`);
  });
});
