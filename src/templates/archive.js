import React from "react";
import { graphql } from "gatsby";

import PostExplorer from "../components/PostExplorer";
import Seo from "../components/Seo";
import toPostCard from "../utilities/post";
import slugify from "../utilities/slugify";
import "../styles/archive.css";

const LABELS = {
  tag: { singular: "Tag", plural: "tags" },
  category: { singular: "Category", plural: "categories" },
};

/**
 * Tag and category archives, created in gatsby-node.js and served by this one
 * template.
 *
 * Every post is loaded and then narrowed down here rather than filtered in the
 * page query: the stored values are display strings ("React Native"), which
 * cannot be matched against a URL slug in GraphQL without an extra node field.
 * The site has few enough posts that this costs nothing; see the note in
 * gatsby-node.js for when to revisit.
 */
export default function Archive({ data, pageContext }) {
  const { kind, label, slug } = pageContext;
  const terms = LABELS[kind] ?? LABELS.tag;

  const posts = data.allMarkdownRemark.nodes
    .map(toPostCard)
    .filter((post) =>
      (kind === "category" ? post.category : post.tags).some(
        (value) => slugify(value) === slug,
      ),
    );

  return (
    <div className="container">
      <header className="archive__header">
        <p className="archive__eyebrow">{terms.singular}</p>
        <h1 className="archive__title">{label}</h1>
        <p className="archive__count">
          {posts.length} {posts.length === 1 ? "post" : "posts"}
        </p>
      </header>

      <PostExplorer posts={posts} />
    </div>
  );
}

export const Head = ({ pageContext }) => (
  <Seo
    title={`${pageContext.label} — ${LABELS[pageContext.kind]?.plural ?? "posts"}`}
    pathname={`/${pageContext.kind === "category" ? "categories" : "tags"}/${pageContext.slug}/`}
    description={`Posts tagged ${pageContext.label}.`}
  />
);

export const pageQuery = graphql`
  query ArchivePage {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      nodes {
        ...PostCardFields
      }
    }
  }
`;
