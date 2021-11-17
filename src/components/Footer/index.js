import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCopyright } from '@fortawesome/free-solid-svg-icons';

export default class Footer extends Component {

  render() {

    return (

      <footer className="footer">
        <FontAwesomeIcon icon={faCopyright} color="rgb(26, 188, 156)" /> Shahnawaz Hossan 2019-2021 | Crafted with <FontAwesomeIcon icon={faHeart} color="rgb(26, 188, 156)" />
      </footer>
    )
  }
}