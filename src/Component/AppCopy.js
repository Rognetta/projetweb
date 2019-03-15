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
import Home from "./Component/Home";
import ArtistForm from "./Component/Form/ArtistForm";
import AlbumForm from "./Component/Form/Albumform";
import TrackForm from "./Component/Form/TrackForm";

class AppCopy extends Component {

    render() {
        return (
            <Router>
                <div>
                    <ButtonForm/>
                    <Route exact path='/' component={Home} />
                    <Route path='/artist' component={ArtistForm} />
                    <Route path='/album' component={AlbumForm} />
                    <Route path='/track' component={TrackForm} />
                </div>
            </Router>
        );
    }

}

export default AppCopy;

