import React, { Component } from 'react';
import { Link } from 'gatsby';
import book_reading from '../../../static/logos/book-reader.png';
import './navbar.css';

import styled from 'styled-components';

import ThemeLight from '../../themes/ThemeLight';
import ThemeDark from '../../themes/ThemeDark';

import Icon from '../StyleSwitch';

const Container = styled.div`
  max-width: 100vw;
  height: 17vh;
  margin: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.background};
  transition: all 0.5s ease-out;
  @media only screen and (max-width: 768px) {
    margin: 0 2rem;
  }
`

export default class Navigation extends Component {

  render() {

    const { menuLinks } = this.props;

    return (
      <nav className="navbar bg-light" >
        <div className="nav-container">
          <div className="navbar-brand">
            <Link to="/">
              <img src={book_reading} className="favicon" alt="sdfsf" />
              <span className="text"></span>
            </Link>
          </div>
          <div className="nav-links">
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link} >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    )
  }
}