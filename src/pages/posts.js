import React from "react";
import { graphql } from "gatsby";

import PostExplorer from "../components/PostExplorer";
import Seo from "../components/Seo";
import config from "../data/config";
import toPostCard from "../utilities/post";

/**
 * The post archive.
 *
 * Replaces a class component whose sidebar filtered on
 * `frontmatter.category[0]` — so a post tagged with two categories could only
 * ever be found under the first one — backed by a GraphQL `group()` query that
 * duplicated the whole post list. Search and faceting now come from
 * PostExplorer, over the list this page already loads.
 */
export default function Posts({ data }) {
  const posts = data.allMarkdownRemark.nodes.map(toPostCard);

  return (
    <div className="container">
      <div className="section-heading">
        <h1>Posts</h1>
        <p className="posts__count">
          {posts.length} {posts.length === 1 ? "article" : "articles"} on
          programming, tooling and things I broke along the way.
        </p>
      </div>

      <PostExplorer posts={posts} />
    </div>
  );
}

export const Head = () => (
  <Seo
    title="Posts"
    pathname="/posts/"
    description={`Articles by ${config.author} on software engineering, tooling and problem solving.`}
  />
);

export const pageQuery = graphql`
  query PostsPage {
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
