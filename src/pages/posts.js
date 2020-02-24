import React from "react";
import Layout from '../layout';
import Helmet from 'react-helmet';
import config from '../data/config';
import SideBar from '../components/SideBar';

class Posts extends React.Component {
  render(){
    return (
      <Layout>
        <Helmet title={`Posts | ${config.siteTitle} – Software Engineer`} />
        <SideBar/>
      </Layout>
    )
  }
}

export default Posts;