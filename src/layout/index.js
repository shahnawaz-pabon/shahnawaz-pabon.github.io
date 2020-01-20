import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import config from '../data/config';
import '../styles/global.css';
import '../styles/navbar.css';

export default class Layout extends Component {

  render() {

    const { children } = this.props;

    return (
      <>
        <NavigationBar menuLinks={config.menuLinks} />
        <div id="main-content">{children}</div>
      </>
    )
  }
}