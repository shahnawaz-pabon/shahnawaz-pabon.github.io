 import React from "react";
 import { graphql } from "gatsby";
 import Layout from '../layout';
 import PostListing from '../components/PostListing';
 import styled, { ThemeProvider } from 'styled-components';

 class Index extends React.Component {
     render(){
        const postEdges = this.props.data.allMarkdownRemark.edges;

        return (
            <Layout >
                <div className="container">
                  <section>
                      <PostListing postEdges={postEdges} />
                  </section>
                </div>
            </Layout>
        )
     }
 }

export default Index;

export const pageQuery = graphql`
query {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        frontmatter {
          template
          title
          featuredImage{
            childImageSharp {
              fixed(width: 40, height: 40) {
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
  }
}
`;