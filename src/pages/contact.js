import React from "react";
import Layout from '../layout';
import '../styles/contact.css';
import Helmet from 'react-helmet';
import config from '../data/config';

class About extends React.Component {
  render(){
    return (
      <Layout>
        <Helmet title={`Contact | ${config.siteTitle} – Software Engineer`} />
        <div className="container">
          <h1 className="contact-header">Coming Soon...</h1>
        </div>
      </Layout>
    )
  }
}

export default About;