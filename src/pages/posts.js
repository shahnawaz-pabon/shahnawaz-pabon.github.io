import React from "react";
import Layout from '../layout';
import Helmet from 'react-helmet';
import config from '../data/config';
import PostListing from '../components/PostListing';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import '../styles/sidebar.css';

class Posts extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick(categoryName) {
    console.log("Category Clicked");
    console.log(categoryName);

    let filteredCategory = this.props.data.articles.edges.filter(edge =>
      edge.node.frontmatter.category[0].toLowerCase().includes(categoryName.toLowerCase())
    );

    console.log("filteredCategory");
    console.log(filteredCategory);
  }

  render() {
    const postCategories = this.props.data.categories.group;
    const postEdges = this.props.data.articles.edges;
    console.log("postEdges");
    console.log(postEdges);
    return (
      <Layout>
        <Helmet title={`Posts | ${config.siteTitle} – Software Engineer`} />
        <div className="container">
          <section>
            <PostListing postEdges={postEdges} />
          </section>

          {/* Sidebar */}
          <div className="sidebar">
            <p style={{
              fontSize: '1.5em',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>Categories</p>

            <div className="category-list">
              {
                postCategories.map(category => {

                  return (

                    <p key={category.fieldValue} onClick={() => {
                      this.handleClick(category.fieldValue);
                    }}>
                      <FontAwesomeIcon icon={faHandPointRight} />
                      <span style={{
                        marginLeft: 5
                      }}>
                        {category.fieldValue} ({category.totalCount})
                                    </span>

                      <br />
                    </p>
                  )

                })
              }

            </div>
          </div>
          {/* Sidebar Ends*/}
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