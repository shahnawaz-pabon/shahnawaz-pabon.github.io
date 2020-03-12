import React, { Component } from 'react';
import { css } from '@emotion/core';
import FOOTER from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCopyright } from '@fortawesome/free-solid-svg-icons';

export default class Footer extends Component {

  render() {

    return (

      <footer style={css`${FOOTER}`}>
        <FontAwesomeIcon icon={faCopyright} color="rgb(26, 188, 156)" /> Shahnawaz Hossan 2019 | Crafted with <FontAwesomeIcon icon={faHeart} color="rgb(26, 188, 156)" />
      </footer>
    )
  }
}