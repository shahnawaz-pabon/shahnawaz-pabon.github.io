import React, { useEffect } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../layout";
import { Link } from "gatsby";
import "../styles/post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { Comments } from "../components/Comments";
import { addComments } from "../utilities/utterances";

export default ({ data }) => {
  const post = data.markdownRemark;
  let featuredImage, profileUrl;

  let tags = post.frontmatter.tags;

  profileUrl = post.frontmatter.profileUrl ? post.frontmatter.profileUrl : "";

  if (post.frontmatter.featuredImage) {
    featuredImage = post.frontmatter.featuredImage.childImageSharp.fixed;
  }

  const commentBox = React.createRef();

  useEffect(() => {
    addComments(commentBox);
  }, [commentBox]);

  return (
    <Layout>
      <div className="container">
        <div className="post-header">
          {featuredImage ? <Img fixed={featuredImage} /> : <div />}

          <div className="post-title-part">
            <h2 className="post-header-title">{post.frontmatter.title}</h2>
            <div className="post-date">
              <small className="text-muted">
                {post.frontmatter.date} . ☕️ {post.timeToRead} min read .{" "}
                <b>
                  ​🤵🏻 <a href={profileUrl}>{post.frontmatter.author}</a>
                </b>
              </small>
            </div>
            <div className="post-tags">
              {tags.map((tag) => (
                <Link key={tag} to="/" className="tags">
                  <FontAwesomeIcon
                    icon={faTag}
                    color="#2c3e50"
                    className="tag-icon"
                  />
                  <span className="tag">{tag}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>

      <section id="comments" className="comments container">
        <h2>Comments</h2>
        <Comments commentBox={commentBox} />
      </section>
      
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        template
        title
        featuredImage {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        date(formatString: "DD MMMM, YYYY")
        author
        profileUrl
        category
        tags
      }
      excerpt
      fields {
        slug
      }
    }
  }
`;
