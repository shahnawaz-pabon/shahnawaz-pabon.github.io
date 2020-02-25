import React from "react";
import Layout from '../layout';
import Helmet from 'react-helmet';
import config from '../data/config';
import SideBar from '../components/SideBar';

class Posts extends React.Component {
  render() {
    const postCategories = this.props.data.allMarkdownRemark.group;
    // console.log(postCategories);
    return (
      <Layout>
        <Helmet title={`Posts | ${config.siteTitle} – Software Engineer`} />
        <SideBar postCategories={postCategories}/>
      </Layout>
    )
  }
}

export default Posts;

export const postsQuery = graphql`
query{
  allMarkdownRemark(
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