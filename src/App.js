import React, {Component} from 'react';
import './App.css';
import {PieCharts} from './Component/Chart 1/PieChart';
import {Container, Row, Col} from 'reactstrap';
import {SideMenu} from './Component/SideMenu/SideMenu';
import {LineCharts} from './Component/Chart_2/LineChart';
import {Contact} from "./Component/Contact/Contact";
import {Agenda} from "./Component/Date_Picker/DatePicker";
import ButtonForm from "./Component/ButtonForm";
import RouteTest from "./Component/Route";
import Sidebar from "react-sidebar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ArtistForm from "./Component/Form/ArtistForm";
import AlbumForm from "./Component/Form/Albumform";
import TrackForm from "./Component/Form/TrackForm";

class App extends Component {

    render() {
        return (
                <Router>
                    <div>
                        <div className="header">
                            <SideMenu/>
                        </div>
                        <div className="charts">
                            <PieCharts/>
                            <LineCharts/>
                            <Agenda/>
                            <Contact/>
                        </div>
                        <ButtonForm/>
                        <Route exact path='/artist' component={ArtistForm}/>
                        <Route exact path='/album' component={AlbumForm}/>
                        <Route exact path='/track' component={TrackForm}/>
                    </div>
                </Router>
        );
    }

}

export default App;

