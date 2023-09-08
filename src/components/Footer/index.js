import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCopyright } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear();
    const startYear = 2019;

    return (
      <footer className="footer">
        <FontAwesomeIcon icon={faCopyright} color="rgb(26, 188, 156)" />{" "}
        Shahnawaz Hossan {startYear}-{currentYear} | Crafted with{" "}
        <FontAwesomeIcon icon={faHeart} color="rgb(26, 188, 156)" />
      </footer>
    );
  }
}
