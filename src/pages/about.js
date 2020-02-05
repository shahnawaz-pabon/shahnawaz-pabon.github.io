import React from "react";
import Layout from '../layout';
import '../styles/about.css';

class About extends React.Component {
    render(){
       return (
           <Layout>
             <div className="container">
                <h1 className="about-header">About Page</h1>
             </div>
           </Layout>
       )
    }
}

export default About;