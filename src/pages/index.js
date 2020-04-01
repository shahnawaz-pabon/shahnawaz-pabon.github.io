import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from 'react-helmet';
import config from '../data/config';
import Layout from '../layout';
import PostListing from '../components/PostListing';
import Slider from '../components/Slider';

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Software Engineer`} />
        <Slider />
        <div className="container">
          <section>
            <h1 style={{ textAlign: "center"}}>Recent Posts</h1>
            <PostListing postEdges={postEdges} />

            <h3 style={{
              textAlign: "end"
            }}>
              <Link to="/posts">All Posts</Link>
            </h3>
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
        timeToRead
      }
    }
  }
}
`;