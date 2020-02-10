import React from "react";
import Layout from '../layout';
import '../styles/about.css';
import lottie from 'lottie-web';
import animationData from '../../static/assets/lottie/about.json';

class About extends React.Component {

  componentDidMount(){

    lottie.loadAnimation({
      container: document.getElementById('lottie'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData
    })

  }

  render(){

    const aboutPageMarkdown = this.props.data.markdownRemark;

    console.log("aboutPageMarkdown");
    console.log(aboutPageMarkdown);

    return (
      <Layout>
        <div className="container">
          <h1 className="about-header">About Page</h1>
          <div id='lottie'></div>
        </div>
      </Layout>
    )
  }
}

export default About;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
        fields: { slug: { eq: $slug } },
        frontmatter: {template: {eq: "about"}}
      ) {
      html
      frontmatter{
        template
        title
      }
      excerpt
      fields {
        slug
      }
    }
  }
`