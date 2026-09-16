import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import config from "../../data/config";
import SocialLinks from "../SocialLinks";
import ThemeToggle from "../ThemeToggle";
import bookReader from "../../../static/logos/book-reader.png";
import "./navbar.css";

/**
 * Fixed navigation bar with a slide-in drawer below 860px.
 *
 * The previous navbar had no mobile rules at all: the brand and all four links
 * stayed on one 55px row and simply overflowed. The drawer adds the missing
 * breakpoint, plus the keyboard affordances a menu needs — Escape to close,
 * focus returned to the toggle, and `visibility: hidden` on the closed panel so
 * its links stay out of the tab order.
 */
export default function NavigationBar({ pathname = "/" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const initialRender = useRef(true);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    setIsOpen(false);
  }, [pathname]);

  // Lift the closed panel out of the tab order.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    if (isOpen) {
      panel.removeAttribute("aria-hidden");
      // Move focus into the panel so keyboard users land on the first link.
      panel.querySelector("a")?.focus();
    } else {
      panel.setAttribute("aria-hidden", "true");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      toggleRef.current?.focus();
    };

    // Stop the page behind the drawer from scrolling.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar__inner" aria-label="Main">
        <Link to="/" className="navbar__brand">
          <img src={bookReader} alt="" width="36" height="36" />
          <span className="navbar__name">{config.siteTitle}</span>
        </Link>

        <div className="navbar__links">
          {config.menuLinks.map((link) => (
            <Link
              key={link.link}
              to={link.link}
              className="navbar__link"
              activeClassName="is-active"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="navbar__actions">
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            className="navbar__burger"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
      </nav>

      {/* Dismisses the drawer on tap; hidden from assistive tech. */}
      <div
        className={`navbar__scrim ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-nav"
        ref={panelRef}
        className={`navbar__drawer ${isOpen ? "is-open" : ""}`}
        aria-hidden="true"
      >
        <div className="navbar__drawer-links">
          {config.menuLinks.map((link) => (
            <Link
              key={link.link}
              to={link.link}
              className="navbar__drawer-link"
              activeClassName="is-active"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="navbar__drawer-footer">
          <SocialLinks socials={config.socials} />
        </div>
      </div>
    </header>
  );
}
