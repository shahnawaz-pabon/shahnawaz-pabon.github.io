import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import './SideBar.css';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        console.log("Clicked");
    }

    render() {

        const postCategories = this.props.postCategories;

        console.log("postCategories");
        console.log(postCategories);

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

                                <p key={category.fieldValue} onClick={this.handleClick}>
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