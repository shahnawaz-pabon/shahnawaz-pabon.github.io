import React from "react";
import { graphql, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Seo, { personJsonLd } from "../components/Seo";
import PostListing from "../components/PostListing";
import SocialLinks from "../components/SocialLinks";
import Typewriter from "../components/Typewriter";
import config from "../data/config";
import toPostCard from "../utilities/post";
import "./index.css";

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.nodes.map(toPostCard);
  const [latest, ...rest] = posts;

  return (
    <>
      <section className="hero">
        <div className="hero__aurora" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">Hello, I&rsquo;m</p>

          <h1 className="hero__title">{config.author}</h1>

          <p className="hero__role">
            <Typewriter strings={config.roles} />
          </p>

          <p className="hero__lede">{config.siteDescription}</p>

          <div className="hero__actions">
            <Link className="button button--primary" to="/projects/">
              View projects
              <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </Link>
            <Link className="button button--ghost" to="/posts/">
              Read the blog
            </Link>
          </div>

          <div className="hero__socials">
            <SocialLinks socials={config.socials} />
          </div>
        </div>
      </section>

      <div className="container">
        {latest && (
          <section
            aria-labelledby="featured-heading"
            className="home__featured"
          >
            <p className="home__section-label" id="featured-heading">
              Latest post
            </p>

            <Link to={latest.slug} className="featured-card reveal">
              <span className="featured-card__eyebrow">
                {latest.category[0] && (
                  <span className="featured-card__category">
                    {latest.category[0]}
                  </span>
                )}
                <time dateTime={latest.dateISO}>{latest.date}</time>
                <span aria-hidden="true">·</span>
                <span>{latest.timeToRead} min read</span>
              </span>

              <h2 className="featured-card__title">{latest.title}</h2>

              <p className="featured-card__excerpt">{latest.excerpt}</p>

              <span className="featured-card__cta">
                Read the post
                <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </span>
            </Link>
          </section>
        )}

        {rest.length > 0 && (
          <section aria-labelledby="recent-heading">
            <div className="section-heading">
              <h2 id="recent-heading">Recent posts</h2>
              <Link to="/posts/">All posts</Link>
            </div>

            <PostListing posts={rest} emptyMessage="No posts yet." />
          </section>
        )}
      </div>
    </>
  );
}

export const Head = () => (
  <Seo
    pathname="/"
    description={config.siteDescription}
    jsonLd={personJsonLd()}
  />
);

export const pageQuery = graphql`
  query HomePage {
    allMarkdownRemark(
      limit: 7
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      nodes {
        ...PostCardFields
      }
    }
  }
`;
