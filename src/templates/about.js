import React from "react";
import Layout from '../layout';
import '../styles/about.css';
import lottie from 'lottie-web';
import animationData from './data.json';

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