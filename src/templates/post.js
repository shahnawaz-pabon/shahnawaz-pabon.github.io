import React, { useRef } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Comments from "../components/Comments";
import ReadingProgress from "../components/ReadingProgress";
import Seo, { blogPostingJsonLd } from "../components/Seo";
import TableOfContents from "../components/TableOfContents";
import useCodeCopy from "../hooks/useCodeCopy";
import { toArray } from "../utilities/post";
import slugify from "../utilities/slugify";
import "../styles/prose.css";
import "../styles/post.css";

/**
 * A single post.
 *
 * Three of the older posts carry a hand-written "Table of Contents" section
 * with manually maintained anchors. The generated table of contents would
 * duplicate those, so it is only rendered when the markdown does not already
 * provide one — delete the hand-written section from a post and the generated
 * one takes over.
 */
const HAS_OWN_TOC = /^#{2,3}[ \t]+table of contents[ \t]*$/im;

/**
 * A one-entry table of contents is noise rather than navigation, so the
 * generated list only renders when there is something to navigate.
 */
const countEntries = (html) => (html.match(/href="#/g) || []).length;

export default function Post({ data }) {
  const post = data.markdownRemark;
  const articleRef = useRef(null);
  const bodyRef = useRef(null);

  useCodeCopy(bodyRef, post.html);

  const image = getImage(post.frontmatter.featuredImage);
  const tags = toArray(post.frontmatter.tags);
  const categories = toArray(post.frontmatter.category);
  const hasOwnToc = HAS_OWN_TOC.test(post.rawMarkdownBody || "");
  const showGeneratedToc =
    !hasOwnToc && countEntries(post.tableOfContents || "") > 1;

  return (
    <>
      <ReadingProgress targetRef={articleRef} />

      <div className="container container--narrow">
        <article className="post" ref={articleRef}>
          <header className="post__header">
            {image && (
              <GatsbyImage
                image={image}
                alt=""
                className="post__image"
                imgClassName="post__img"
              />
            )}

            <div className="post__meta">
              {categories.length > 0 && (
                <span className="post__category">
                  <Link to={`/categories/${slugify(categories[0])}/`}>
                    {categories[0]}
                  </Link>
                </span>
              )}
              <time dateTime={post.frontmatter.dateISO}>
                {post.frontmatter.date}
              </time>
              <span aria-hidden="true">·</span>
              <span>{post.timeToRead} min read</span>
            </div>

            <h1 className="post__title">{post.frontmatter.title}</h1>

            <p className="post__byline">
              By{" "}
              {post.frontmatter.profileUrl ? (
                <a
                  href={post.frontmatter.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.frontmatter.author}
                </a>
              ) : (
                post.frontmatter.author
              )}
            </p>

            {tags.length > 0 && (
              <div className="post__tags">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/tags/${slugify(tag)}/`}
                    className="chip"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}
          </header>

          {showGeneratedToc && <TableOfContents html={post.tableOfContents} />}

          {/* Rendered from build-time markdown; the copy buttons are attached
              by useCodeCopy. */}
          <div
            className="prose post__body"
            ref={bodyRef}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        <section className="post__comments" aria-labelledby="comments-heading">
          <h2 id="comments-heading">Comments</h2>
          <Comments />
        </section>
      </div>
    </>
  );
}

export const Head = ({ data }) => {
  const post = data.markdownRemark;
  const description = post.fields.cardExcerpt;

  return (
    <Seo
      title={post.frontmatter.title}
      description={description}
      pathname={post.fields.slug}
      type="article"
      publishedTime={post.frontmatter.dateISO}
      modifiedTime={post.frontmatter.dateISO}
      tags={toArray(post.frontmatter.tags)}
      jsonLd={blogPostingJsonLd({
        title: post.frontmatter.title,
        description,
        slug: post.fields.slug,
        date: post.frontmatter.dateISO,
        tags: toArray(post.frontmatter.tags),
      })}
    />
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      rawMarkdownBody
      tableOfContents(maxDepth: 6)
      timeToRead
      excerpt(pruneLength: 200)
      fields {
        slug
        cardExcerpt
      }
      frontmatter {
        title
        author
        profileUrl
        category
        tags
        date(formatString: "DD MMMM YYYY")
        dateISO: date(formatString: "YYYY-MM-DD")
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
  }
`;
