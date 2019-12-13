import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item.jsx';

configure({adapter: new Adapter()});

const Component = () => (<div></div>);

const ComponentWrapped = withActiveItem(Component);

describe(`HOC withActiveItem should`, () => {
  it(`sets state correctly`, () => {
    const component = mount(<ComponentWrapped
      active={1}
    />);
    expect(component.state(`active`)).toEqual(1);
  });
});
