import React from "react";
import Layout from '../layout';
import '../styles/contact.css';

class About extends React.Component {
    render(){
       return (
           <Layout>
             <div className="container">
                <h1 className="contact-header">Contact Page</h1>
             </div>
           </Layout>
       )
    }
}

export default About;