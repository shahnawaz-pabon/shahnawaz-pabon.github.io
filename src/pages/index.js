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
  allMarkdownRemark {
    edges {
      node {
        timeToRead
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          tags
          title
          featuredImage{
            childImageSharp {
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`;