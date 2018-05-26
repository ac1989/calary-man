import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Header from './Header';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

describe('<Header />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  it('should render without crashing', () => {
    shallow(<Header />);
  });

  it('should render a login button when no { auth }', () => {
    const wrapper = shallow(<Header auth={false} />);
    expect(wrapper.find(Button).exists()).toEqual(true);
  });

  it('should render an avatar when { auth }', () => {
    const wrapper = shallow(<Header auth={true} />);
    expect(wrapper.find(Avatar).exists()).toEqual(true);
  });
});
