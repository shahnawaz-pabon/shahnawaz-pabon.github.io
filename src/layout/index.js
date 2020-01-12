import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import config from '../data/config';
import '../styles/navbar.css';

export default class Layout extends Component {

  render() {

    return (
      <>
        <NavigationBar menuLinks={config.menuLinks} />
      </>
    )
  }
}