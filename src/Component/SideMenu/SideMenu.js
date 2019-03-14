import React from 'react';
import Sidebar from "react-sidebar";
import { Container } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "./sideBar.css";


import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

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
                className="displayMobile"
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <FontAwesomeIcon icon="home"/>
                        </NavIcon>
                        <NavText>
                            Accueil
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <FontAwesomeIcon icon="question-circle"/>
                        </NavIcon>
                        <NavText>
                            Formulaires
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Contact
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Questionnaire de satisfaction
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        );
    }
}

export { SideMenu };

