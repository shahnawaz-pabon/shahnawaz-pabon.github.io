import React from "react";
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import Layout from "../layout";

export default ({ data }) => {
  const post = data.markdownRemark;
  let featuredImage;
          
  if (post.frontmatter.featuredImage) {
    featuredImage = post.frontmatter.featuredImage.childImageSharp.fixed;
  }

  return (
    <Layout>
      <div className="container">
        <div className="post-header">
          
          {featuredImage ? <Img fixed={featuredImage} /> : <div />}

          <div className="post-title-part">
            <h2>{post.frontmatter.title}</h2>
            <div className="post-date">
              <div>{post.frontmatter.category} , </div>
              <small className="text-muted">{post.frontmatter.date} | {post.timeToRead} min read</small>
            </div>
          </div>

        </div>
        
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        template
        title
        featuredImage{
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        date(formatString: "DD MMMM, YYYY")
        category
        tags
      }
      excerpt
      fields {
        slug
      }
    }
  }
`