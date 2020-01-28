import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import config from '../data/config';
import '../styles/global.css';

export default class Layout extends Component {

  render() {

    const { children } = this.props;

    return (
      <div>
        <NavigationBar menuLinks={config.menuLinks} />
        <div id="content-wrapper">{children}</div>
      </div>
    )
  }
}