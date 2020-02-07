import React from "react";
import Layout from '../layout';
import lottie from 'lottie-web';
import animationData from '../../static/assets/lottie/404.json';
import '../styles/404.css';

class NotFound extends React.Component {

  componentDidMount(){

    lottie.loadAnimation({
      container: document.getElementById('not-found'), // the dom element that will contain the animation
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
            <div id="not-found"></div>
          </div>
        </Layout>
    )
  }
}

export default NotFound;