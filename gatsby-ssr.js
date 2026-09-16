import React from "react";

import { ThemeProvider } from "./src/components/ThemeContext";
import Layout from "./src/layout";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

/**
 * Resolves the color theme before the first paint.
 *
 * This has to be a blocking inline script in <head>: if it ran from a React
 * effect instead, a dark-mode visitor would see a flash of the light theme on
 * every full page load. It writes the same `data-theme` attribute that
 * ThemeContext manages afterwards.
 */
const themeBootstrap = `
(function () {
  try {
    var stored = window.localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored === "light" || stored === "dark" ? stored : (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (error) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
`;

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "en" });

  setHeadComponents([
    <script
      key="theme-bootstrap"
      dangerouslySetInnerHTML={{ __html: themeBootstrap }}
    />,
  ]);
};
