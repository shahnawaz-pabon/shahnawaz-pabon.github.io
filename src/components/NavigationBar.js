import React, { Component } from 'react';
import { Link } from 'gatsby';
import book_reading from '../assets/images/book-reader.png';

export default class Navigation extends Component {

  render() {

    const { menuLinks } = this.props;

    return (
      <nav className="nav" >
        <div className="nav-container">
          <div className="brand">
            <Link to="/">
              <img src={book_reading} className="favicon" alt="" />
              <span className="text"></span>
            </Link>
          </div>
          <div className="links">
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link} activeClassName="active">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    )
  }
}