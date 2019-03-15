import React from 'react';
//import node_modules/font_awesome/css/font_awesome.min.css;

import Sidebar from "react-sidebar";
import { Container } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "./sideBar.css";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import {Link} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {LineCharts} from "../Chart_2/LineChart";
import NavLink from "reactstrap/es/NavLink";

library.add(fas)

class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <SideNav
                onSelect={(selected) => {
                }}
                className="displayMobile">
                <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <FontAwesomeIcon icon="home"/>
                            </NavIcon>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>

                        <NavItem eventKey="artist">
                            <NavIcon>
                                <FontAwesomeIcon icon="question-circle"/>
                            </NavIcon>
                            <NavLink href="/artiste"> Formulaire artiste </NavLink>
                        </NavItem>

                        <NavItem eventKey="album">
                            <NavIcon>
                                <FontAwesomeIcon icon="question-circle"/>
                            </NavIcon>
                            <NavLink href="/album"> Formulaire album </NavLink>
                        </NavItem>

                        <NavItem eventKey="track">
                            <NavIcon>
                                <FontAwesomeIcon icon="question-circle"/>
                            </NavIcon>
                            <NavLink href="/track"> Formulaire track </NavLink>
                        </NavItem>
                    </SideNav.Nav>
            </SideNav>
        );
    }
}

export { SideMenu };

