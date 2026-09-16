import React from "react";

import { useTheme } from "../ThemeContext";
import "./theme-toggle.css";

/**
 * Sun/moon theme switch.
 *
 * Both icons are always in the markup and CSS shows whichever matches the
 * `data-theme` attribute on <html>. Deciding in React instead would mean the
 * server renders one icon and the client hydrates the other, which React
 * reports as a hydration mismatch — and the correct icon would only appear
 * after hydration.
 */
export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <span
        className="theme-toggle__icon theme-toggle__icon--sun"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" role="presentation">
          <circle cx="12" cy="12" r="4.2" fill="currentColor" />
          <g
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          >
            <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2" />
            <path d="M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6" />
          </g>
        </svg>
      </span>
      <span
        className="theme-toggle__icon theme-toggle__icon--moon"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" role="presentation">
          <path
            d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1z"
            fill="currentColor"
          />
        </svg>
      </span>
    </button>
  );
}
