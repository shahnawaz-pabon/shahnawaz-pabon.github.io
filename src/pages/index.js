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
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`;