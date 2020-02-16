 import React from "react";
 import { graphql } from "gatsby";
 import Helmet from 'react-helmet';
 import config from '../data/config';
 import Layout from '../layout';
 import PostListing from '../components/PostListing';

 class Index extends React.Component {
     render(){
        const postEdges = this.props.data.allMarkdownRemark.edges;

        return (
          <Layout>
            <Helmet title={`${config.siteTitle} – Software Engineer`} />
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
  allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
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