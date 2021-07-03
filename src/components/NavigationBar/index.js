import React, { Component } from 'react';
import { Link } from 'gatsby';
import book_reading from '../../../static/logos/book-reader.png';
import './navbar.css';
import { ThemeContext } from '../ThemeContext';

export default class Navigation extends Component {
  static contextType = ThemeContext;

  render() {

    const { menuLinks } = this.props;
    const { isDark } = this.context;

    return (
      <nav
        style={isDark ? { backgroundColor: '#1f2029', color: '#fffff' } : { backgroundColor: '#fff', color: '#212112'}}
        className='navbar'>
        <div className="nav-container">
          <div className="navbar-brand">
            <Link to="/">
              <img src={book_reading} className="favicon" alt="Book Reader" />
              <span className="text"></span>
            </Link>
          </div>
          <div className="nav-links">
            {
              menuLinks.map(link => (
                <Link key={link.name} to={link.link} activeClassName="tab-active" >
                  {link.name}
                </Link>
              ))
            }
          </div>
        </div>
      </nav>
    )
  }
}