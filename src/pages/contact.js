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
            <div>
              <form
                action="https://formspree.io/FORM_ID"
                method="POST"
              >
                <label>
                  Your Name:
                  <input type="text" name="name" />
                </label>
                <label>
                  Your Email:
                  <input type="email" name="_replyto" />
                </label>
                <label>
                  Message:
                  <textarea name="message"></textarea>
                </label>
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>


        </div>
      </Layout>
    )
  }
}

export default Contact;