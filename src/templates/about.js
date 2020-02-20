import React from "react";
import Layout from '../layout';
import '../styles/about.css';
import lottie from 'lottie-web';
import animationData from '../../static/assets/lottie/about.json';
import Helmet from 'react-helmet';
import config from '../data/config';

class About extends React.Component {

  componentDidMount(){

    lottie.loadAnimation({
      container: document.getElementById('about-lottie'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData
    })

  }

  render(){

    const aboutPageMarkdown = this.props.data.markdownRemark;
    
    return (
      <Layout>
        <Helmet title={`About | ${config.siteTitle} – Software Engineer`} />
        <div className="container">
          {/* <h1 className="about-header">About Me</h1> */}
          <div id='about-lottie'></div>
          <div dangerouslySetInnerHTML={{ __html: aboutPageMarkdown.html }} />
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