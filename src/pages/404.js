import React from "react";
import Layout from '../layout';
import '../styles/404.css';

class NotFound extends React.Component {
    render(){
       return (
           <Layout>
             <div className="container">
                <h1 className="about-header">404 Not Found</h1>
             </div>
           </Layout>
       )
    }
}

export default NotFound;