import React, { Component } from 'react';
import { throttle } from 'lodash';

export default class ScreenSize extends Component {
  state = {
    width: 0,
    height: 0
  };

  updateDimensions = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    this.setState({ width, height });
  };

  componentDidMount() {
    window.onresize = throttle(this.updateDimensions, 500);
    this.updateDimensions();
  }

  render() {
    console.log(this.state);
    return <div>{this.props.children}</div>;
  }
}
