import React from "react";
import Layout from '../layout';
import '../styles/contact.css';
import Helmet from 'react-helmet';
import config from '../data/config';
import wave from '../../static/assets/images/wave.png';
import contact from '../../static/assets/images/contact.svg';

class About extends React.Component {
  render(){
    return (
      <Layout>
        <Helmet title={`Contact | ${config.siteTitle} – Software Engineer`} />
        <div className="container">

          <div class="img">
            <img src={contact} />
          </div>

        </div>
      </Layout>
    )
  }
}

export default About;