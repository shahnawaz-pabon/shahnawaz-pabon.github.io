 import React from "react";
 import { graphql } from "gatsby";
 import Layout from '../layout';
 import PostListing from '../components/PostListing';

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
          date(formatString: "DD MMMM, YYYY")
          tags
          title
          featuredImage{
            childImageSharp {
              fixed(width: 60, height: 60) {
                ...GatsbyImageSharpFixed
              }
            }
          }
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