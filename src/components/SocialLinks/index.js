import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBloggerB,
  faGithub,
  faLinkedinIn,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import "./social-links.css";

/** Maps the `icon` names in src/data/config.js to icons. */
const ICONS = {
  github: faGithub,
  linkedin: faLinkedinIn,
  stackoverflow: faStackOverflow,
  blogger: faBloggerB,
};

/**
 * Used in the footer and on the contact page. `rel="me"` marks these as
 * profiles belonging to the same person, which is what IndieAuth and several
 * search engines read.
 */
export default function SocialLinks({ socials, withLabels = false }) {
  return (
    <ul className="social-links">
      {socials.map((social) => (
        <li key={social.name}>
          <a
            href={social.url}
            target="_blank"
            rel="me noopener noreferrer"
            title={social.name}
          >
            <FontAwesomeIcon icon={ICONS[social.icon] || faGithub} />
            {withLabels ? (
              <span className="social-links__label">{social.name}</span>
            ) : (
              <span className="visually-hidden">{social.name}</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
