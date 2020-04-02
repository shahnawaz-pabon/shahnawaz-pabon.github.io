import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from 'react-helmet';
import config from '../data/config';
import Layout from '../layout';
import PostListing from '../components/PostListing';
import Slider from '../components/Slider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faDiceD20 } from "@fortawesome/free-solid-svg-icons";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Software Engineer`} />
        <Slider />
        <div className="container">
          <section>
            <h1 style={{ textAlign: "center" }}>
              <FontAwesomeIcon icon={faDiceD20} className="icon-rotating" />
              <span style={{
                paddingLeft: 10,
                paddingRight: 10
              }}>Recent Posts</span>
              <FontAwesomeIcon icon={faDiceD20} className="icon-rotating" />
            </h1>
            <PostListing postEdges={postEdges} />

            <div className="all-posts" style={{
              textAlign: 'center',
              marginTop: 20
            }}>
              <Link to="/posts" style={{
                padding: '.4rem .6rem',
                background: '#cecece',
                borderRadius: 4,
                textDecoration: 'none',
                color: '#2c3e50',
                fontWeight: 'bold'
              }}>
                <FontAwesomeIcon icon={faClipboardList} />
                <span style={{
                  paddingLeft: 3
                }}>All Posts</span>
              </Link>
            </div>
          </section>
        </div>
      </Layout >
    )
  }
}

export default Index;

export const pageQuery = graphql`
query {
  allMarkdownRemark(
      limit: 5,
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