import React, { Component } from 'react';
import Sidebar from "react-sidebar";

export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
        <Sidebar
            sidebar={
                <b>Sidebar content</b>
            }
            open={true}
            docked={true}
            pullRight={true}
        >
            <b>Main content</b>

        </Sidebar>
        )
    }
}