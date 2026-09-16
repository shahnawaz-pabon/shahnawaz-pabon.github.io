import React from "react";

import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

/**
 * The page shell, applied to every page by `wrapPageElement` in
 * gatsby-browser.js and gatsby-ssr.js.
 *
 * Pages render only their own content; the navbar, footer and skip link live
 * here so they cannot drift between pages. Scroll-reveal animations are
 * declared in CSS (see `.reveal` in global.css) and need no code here.
 */
export default function Layout({ children, location }) {
  const pathname = location?.pathname ?? "/";

  return (
    <div className="site">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <NavigationBar pathname={pathname} />

      <main id="main-content" className="site__main">
        {children}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
