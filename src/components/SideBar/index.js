import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import './SideBar.css';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(categoryName) {
        console.log("Category Clicked");
        console.log(categoryName);

        let filteredCategory = this.props.postEdges.filter(edge =>
            edge.node.frontmatter.category[0].toLowerCase().includes(categoryName.toLowerCase())
        );

        console.log("filteredCategory");
        console.log(filteredCategory);
    }

    render() {

        const postEdges = this.props.postEdges;
        const postCategories = this.props.postCategories;

        console.log("postEdges");
        console.log(postEdges);

        return (
            <div className="sidebar">
                <p style={{
                    fontSize: '1.5em',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>Categories</p>

                <div className="category-list">
                    {
                        postCategories.map(category => {

                            return (

                                <p key={category.fieldValue} onClick={() => {
                                    this.handleClick(category.fieldValue);
                                }}>
                                    <FontAwesomeIcon icon={faHandPointRight} />
                                    <span style={{
                                        marginLeft: 5
                                    }}>
                                        {category.fieldValue} ({category.totalCount})
                                    </span>

                                    <br />
                                </p>
                            )

                        })
                    }

                </div>
            </div>
        )
    }
}