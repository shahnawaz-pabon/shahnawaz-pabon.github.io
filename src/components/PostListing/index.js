import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "./postlist.css";

/**
 * The fields every post card needs. Declared here as a fragment so the home
 * page, the posts page and the tag archives all render the same card from the
 * same shape — adding a field in one place updates all three.
 */
export const postCardFields = graphql`
  fragment PostCardFields on MarkdownRemark {
    timeToRead
    fields {
      slug
      cardExcerpt
    }
    frontmatter {
      title
      date(formatString: "DD MMM YYYY")
      dateISO: date(formatString: "YYYY-MM-DD")
      category
      tags
      featuredImage {
        childImageSharp {
          gatsbyImageData(
            width: 144
            height: 144
            layout: CONSTRAINED
            placeholder: BLURRED
          )
        }
      }
    }
  }
`;

/**
 * Renders a grid of post cards.
 *
 * `posts` is the normalised shape produced by `toPostCard`
 * (src/utilities/post.js): category and tags are always arrays, and
 * `featuredImage` is either a sharp node or null.
 */
export default function PostListing({ posts, emptyMessage }) {
  if (!posts || posts.length === 0) {
    return <p className="post-list__empty">{emptyMessage}</p>;
  }

  return (
    <ul className="post-list">
      {posts.map((post) => {
        const image = getImage(post.featuredImage);
        const category = post.category[0];
        const tags = post.tags;

        return (
          <li key={post.slug} className="post-list__item reveal">
            <Link to={post.slug} className="post-card">
              <span className="post-card__media" aria-hidden="true">
                {image ? (
                  <GatsbyImage
                    image={image}
                    alt=""
                    className="post-card__image"
                    imgClassName="post-card__img"
                  />
                ) : (
                  <span className="post-card__monogram">
                    {post.title.charAt(0)}
                  </span>
                )}
              </span>

              <span className="post-card__body">
                <span className="post-card__eyebrow">
                  {category && (
                    <span className="post-card__category">{category}</span>
                  )}
                  <time dateTime={post.dateISO}>{post.date}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.timeToRead} min read</span>
                </span>

                <h3 className="post-card__title">{post.title}</h3>

                {post.excerpt && (
                  <span className="post-card__excerpt">{post.excerpt}</span>
                )}

                {tags.length > 0 && (
                  <span className="post-card__tags">
                    {tags.slice(0, 3).map((tag) => (
                      <span className="chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </span>
                )}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
