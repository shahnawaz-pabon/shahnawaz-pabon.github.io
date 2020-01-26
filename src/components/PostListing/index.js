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
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="posts">

        {postList.map(post => {

          return(
            <Link to={post.path} key={post.title}>

              <div>
                <Img fixed={post.featuredImage.childImageSharp.fixed}/>
              </div>

              <div>
                <h2>{post.title}</h2>
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