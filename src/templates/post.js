import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="container">
        <h1>{post.frontmatter.title}</h1>
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