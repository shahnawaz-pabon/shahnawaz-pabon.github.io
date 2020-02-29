import React from "react";
import Layout from '../layout';
import Helmet from 'react-helmet';
import config from '../data/config';
import SideBar from '../components/SideBar';
import PostListing from '../components/PostListing';

class Posts extends React.Component {
  render() {
    const postCategories = this.props.data.allMarkdownRemark.group;
    // console.log(postCategories);
    return (
      <Layout>
        <Helmet title={`Posts | ${config.siteTitle} – Software Engineer`} />
        <div className="container">
          <SideBar postCategories={postCategories} />
        </div>
      </Layout>
    )
  }
}

export default Posts;

export const postsQuery = graphql`
query{
    articles: allMarkdownRemark(
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
  categories: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] },
    filter: { frontmatter: { template: { eq: "post" } } }
  ) {
    group(limit: 500, field: frontmatter___category) {
      totalCount
      fieldValue
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
}
`;