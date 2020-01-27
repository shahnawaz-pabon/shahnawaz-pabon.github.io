import React, { Component } from 'react';
import { Link } from 'gatsby';
import book_reading from '../../../static/logos/book-reader.png';
import './navbar.css';

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