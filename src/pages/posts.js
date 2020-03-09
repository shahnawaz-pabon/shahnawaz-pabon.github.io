import React from "react";
import Layout from '../layout';
import Helmet from 'react-helmet';
import config from '../data/config';
import PostListing from '../components/PostListing';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import '../styles/sidebar.css';
import classNames from 'classnames';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEdges: this.props.data.articles.edges,
      currentCategory: '',
      sidebarShown: true,
      toggleIcon: true
    }
  }

  categoryFilter(categoryName) {
    // console.log("Category Clicked");
    // console.log(categoryName);

    let filteredCategory = this.props.data.articles.edges.filter(edge =>
      edge.node.frontmatter.category[0].toLowerCase().includes(categoryName.toLowerCase())
    );

    this.setState({
      filteredEdges: filteredCategory,
      currentCategory: categoryName
    });
  }

  allPosts() {
    this.setState({
      filteredEdges: this.props.data.articles.edges,
      currentCategory: ''
    });
  }

  toggleSidebar(){
    console.log("Sidebar Clicked");
    this.setState({
      toggleIcon: !this.state.toggleIcon
    })
  }

  render() {
    const postCategories = this.props.data.categories.group;
    const postEdges = this.props.data.articles.edges;
    // console.log("postEdges");
    // console.log(postEdges);
    return (
      <Layout>
        <Helmet title={`Posts | ${config.siteTitle} – Software Engineer`} />
        <div className="container">

          {
            this.state.currentCategory && <h3 style={{
              textAlign: 'center'
            }}>Filtered Posts under <b style={{ color: 'rgb(26, 188, 156)' }}>
                {this.state.currentCategory}</b> category
            </h3>
          }
          <section>
            <PostListing postEdges={this.state.filteredEdges} />
          </section>

          {/* Sidebar */}
          <div className="sidebar-circle" onClick={() => {
            this.toggleSidebar();
          }}>
            { this.state.toggleIcon && <FontAwesomeIcon icon={faBars} />}
            { !this.state.toggleIcon && <FontAwesomeIcon icon={faTimes} />}
          </div>
          <div className="sidebar">
            <p style={{
              fontSize: '1.5em',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>Categories</p>

            <div className="category-list">
              <p onClick={() => {
                this.allPosts();
              }}>
                <FontAwesomeIcon icon={faHandPointRight} />
                <span style={{
                  marginLeft: 5
                }}>
                  All ({this.props.data.articles.totalCount})
                </span>

                <br />
              </p>
              {
                postCategories.map(category => {

                  return (

                    <p key={category.fieldValue} onClick={() => {
                      this.categoryFilter(category.fieldValue);
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
    totalCount
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