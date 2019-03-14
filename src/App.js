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

class App extends Component {

    render() {
        return (
                <>
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
                    <RouteTest/>
                </>
        );
    }

}

export default App;

