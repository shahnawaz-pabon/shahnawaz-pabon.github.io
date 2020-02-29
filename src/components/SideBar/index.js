import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import './SideBar.css';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(){
        console.log("Clicked");
    }

    render() {

        const postCategories = this.props.postCategories;

        console.log("postCategories");
        console.log(postCategories);

        return (

            <Sidebar
                styles={{
                    sidebar: {
                        top: 75,
                        width: 250,
                    },
                }}
                sidebar={
                    <div>
                        <p style={{
                            fontSize: '1.5em',
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}
                        >Categories</p>
                        <div className="category-list">
                            {
                                postCategories.map(category => {

                                    return (

                                        <b key={category.fieldValue} onClick={this.handleClick}>
                                            <FontAwesomeIcon icon={faFeatherAlt} />
                                            <span style={{
                                                marginLeft: 5
                                            }}>
                                                {category.fieldValue} ({category.totalCount})
                                        </span>

                                            <br />
                                        </b>
                                    )

                                })
                            }

                        </div>
                    </div>
                }
                open={true}
                docked={true}
                pullRight={true}
            >
                <></>

            </Sidebar>
        )
    }
}