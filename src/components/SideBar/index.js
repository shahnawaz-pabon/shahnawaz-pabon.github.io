import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";

export default class SideBar extends Component {
    constructor(props) {
        super(props);
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
                        {
                            postCategories.map(category => {

                                return (

                                    <b key={category.fieldValue} style={{
                                        margin: 10
                                    }}>
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