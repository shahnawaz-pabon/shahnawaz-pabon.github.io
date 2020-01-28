import React from "react";
import { Link } from 'gatsby';
import './postlist.css';
import Img from 'gatsby-image';

class PostListing extends React.Component {

  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        featuredImage: postEdge.node.frontmatter.featuredImage,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="posts">

        {postList.map(post => {

          let featuredImage
          if (post.featuredImage) {
            featuredImage = post.featuredImage.childImageSharp.fixed
          }

          return(
            <Link to={post.path} key={post.title}>

              {featuredImage ? <Img fixed={featuredImage} /> : <div />}

              <div>
                <h2>{post.title}</h2>
                <small className="text-muted">{post.date}</small>
              </div>
              
            </Link>
          )

        }
        
        )}
      </div>
    );
  }
}

export default PostListing;