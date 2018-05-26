import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import AuthButton from './AuthButton';

describe('<AuthButton />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  it('should render without crashing', () => {
    shallow(<AuthButton />);
  });

  it('should render a button', () => {
    const wrapper = shallow(<AuthButton />);
    expect(wrapper.name()).toEqual('WithStyles(Button)');
  });

  it('should render an icon prop', () => {
    const wrapper = shallow(<AuthButton fontIcon="fab fa-github" />);
    expect(wrapper.find('.fa-github').exists()).toEqual(true);
  });

  it('should use provided authService prop', () => {
    // FIXME: Better way?;
    // const wrapper = shallow(<AuthButton authService="Gusto" />);
    // expect(wrapper.childAt(2).text()).toEqual('Gusto');
  });
});
