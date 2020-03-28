import React from "react";
import Layout from '../layout';
import '../styles/contact.css';
import Helmet from 'react-helmet';
import config from '../data/config';
import contact from '../../static/assets/images/contact.svg';
import lottie from 'lottie-web';
import animationTelegram from '../../static/assets/lottie/telegram.json';

class Contact extends React.Component {
  componentDidMount() {

    lottie.loadAnimation({
      container: document.getElementById('contact-lottie'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationTelegram
    })

  }

  render() {
    return (
      <Layout>
        <Helmet title={`Contact | ${config.siteTitle} – Software Engineer`} />
        <div className="container">

          <div id='contact-lottie'></div>

          <div className="img">
            <img src={contact} />
            <h3 id="contact-header">If you have queries, feel free to <a href="mailto:s.pabon93@gmail.com">Mail Me.</a></h3>
          </div>


        </div>
      </Layout>
    )
  }
}

export default Contact;