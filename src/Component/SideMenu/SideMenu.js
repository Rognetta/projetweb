import React from 'react';
//import 'node_modules/font_awesome/css/font_awesome.min.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "./sideBar.css";

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ArtistForm from "../Form/ArtistForm";
import TrackForm from "../Form/TrackForm";
import DeleteATrack from "../Form/DeleteATrack";
import AdminVue from "../AdminVue/AdminVue";
import Home from "../Home";

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
            <Router>
                <Route render={({ location, history }) => (
                    <React.Fragment>
                        <SideNav
                            onSelect={(selected) => {
                                const to = '/' + selected;
                                if (location.pathname !== to) {
                                    history.push(to);
                                }
                            }}
                        >
                <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <FontAwesomeIcon icon="home"/>
                            </NavIcon>
                            <NavText>Home</NavText>
                        </NavItem>

                        <NavItem eventKey="artist">
                            <NavIcon>
                                <FontAwesomeIcon icon="microphone"/>
                            </NavIcon>
                            <NavText> Artistes </NavText>
                        </NavItem>

                        <NavItem eventKey="album">
                            <NavIcon>
                                <FontAwesomeIcon icon="caret-square-right"/>
                            </NavIcon>
                            <NavText> Albums </NavText>
                        </NavItem>

                        <NavItem eventKey="track">
                            <NavIcon>
                                <FontAwesomeIcon icon="music"/>
                            </NavIcon>
                            <NavText> Tracks </NavText>
                        </NavItem>
                    </SideNav.Nav>

            </SideNav>
                        <main>
                            <Route exact path="/" component={Home} />
                            <Route path='/home' component={Home} />
                            <Route path='/artist' component={ArtistForm} />
                            <Route path='/album' component={DeleteATrack} />
                            <Route path='/track' component={TrackForm} />
                            <Route path='/admin' component = {AdminVue}/>
                        </main>
                    </React.Fragment>
                    )}/>
            </Router>

        );
    }
}

export { SideMenu };

