import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import config from "../../data/config";
import SocialLinks from "../SocialLinks";
import "./Footer.css";

const START_YEAR = 2019;

export default function Footer() {
  // Computed per render rather than at module scope so a long-lived static
  // build does not freeze the copyright year.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{config.siteTitle}</p>
          <p className="footer__role">{config.authorRole}</p>
        </div>

        <SocialLinks socials={config.socials} />

        <p className="footer__note">
          <FontAwesomeIcon icon={faHeart} className="footer__heart" />{" "}
          <span>
            {START_YEAR}–{currentYear} {config.author}. Built with Gatsby.
          </span>
        </p>
      </div>
    </footer>
  );
}
