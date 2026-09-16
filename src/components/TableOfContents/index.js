import React from "react";

import "./toc.css";

/**
 * Renders the table of contents that `gatsby-transformer-remark` generates from
 * the post's headings.
 *
 * The previous posts each carried a hand-written list of anchors, which drifted
 * out of sync as headings changed. This one is derived from the headings
 * themselves at build time.
 */
export default function TableOfContents({ html, label = "On this page" }) {
  if (!html) return null;

  return (
    <nav className="toc" aria-labelledby="toc-heading">
      <p className="toc__heading" id="toc-heading">
        {label}
      </p>
      <div className="toc__body" dangerouslySetInnerHTML={{ __html: html }} />
    </nav>
  );
}
