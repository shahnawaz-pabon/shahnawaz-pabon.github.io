import React from "react";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";

/**
 * Font Awesome normally injects its stylesheet at runtime, which happens after
 * hydration and makes icons pop in. Importing the stylesheet instead keeps the
 * glyph rules in the extracted CSS. The stylesheet import must be a static
 * import alongside the others (see the note below), so `autoAddCss` is switched
 * off after the import block.
 */
import "@fortawesome/fontawesome-svg-core/styles.css";

/**
 * Self-hosted webfonts. Previously these came from a Google Fonts `@import`,
 * which blocked the first paint on a third-party request and left the offline
 * service worker with nothing to cache. Only the latin subset is pulled in.
 */
import "@fontsource/ubuntu/latin-400.css";
import "@fontsource/ubuntu/latin-400-italic.css";
import "@fontsource/ubuntu/latin-500.css";
import "@fontsource/ubuntu/latin-700.css";
import "@fontsource/ubuntu-mono/latin-400.css";
import "@fontsource/ubuntu-mono/latin-700.css";

import { ThemeProvider } from "./src/components/ThemeContext";
import Layout from "./src/layout";
import "./src/styles/tokens.css";
import "./src/styles/global.css";
import "./src/styles/syntax-highlighter.css";

// Every static import has to sit above this: ESLint's `import/first` rule runs
// as part of `gatsby develop` and fails the build otherwise.
fontAwesomeConfig.autoAddCss = false;

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

/**
 * The layout wraps every page from here rather than being imported by each one,
 * so pages stay focused on their own content.
 */
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
