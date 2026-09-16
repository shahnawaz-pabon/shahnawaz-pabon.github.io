import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import config from "../data/config";
import "../styles/prose.css";
import "../styles/about.css";

/**
 * The standalone About page, rendered from `content/about.md`.
 *
 * The Lottie animation was dropped here: the page is text-heavy, and the
 * animation pushed the actual content below the fold.
 */
export default function About({ data }) {
  const page = data.markdownRemark;

  return (
    <div className="container container--narrow">
      <article className="prose prose--about">
        <h1 className="about__title">{page.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </article>
    </div>
  );
}

export const Head = ({ data }) => (
  <Seo
    title={data.markdownRemark.frontmatter.title}
    pathname={data.markdownRemark.fields.slug}
    description={`About ${config.author}, ${config.authorRole}.`}
  />
);

export const query = graphql`
  query AboutPage($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { template: { eq: "about" } }
    ) {
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
