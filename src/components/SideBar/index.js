import React, { Component } from 'react';
import Sidebar from "react-sidebar";
// import  styles from './styles';

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
                        width: 250
                    },
                }}
                sidebar={
                    <div>
                        {
                            postCategories.map(category => {

                                return (
                                    <b key={category.fieldValue}>
                                        {category.fieldValue} - {category.totalCount}
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