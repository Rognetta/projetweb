import React, { Component } from 'react';
import './App.css';
import { PieCharts } from './Component/Chart 1/PieChart';
import { Container, Row, Col } from 'reactstrap';
import {SideMenu} from './Component/SideMenu/SideMenu';
import { LineCharts } from './Component/Chart_2/LineChart';

import {Agenda} from "./Component/Date_Picker/DatePicker";

import Sidebar from "react-sidebar";

class App extends React.Component {

    render() {
        return (
                <>
                    <div>
                        <SideMenu/>
                    </div>
                    <div className="charts">
                        <PieCharts/>
                        <LineCharts/>
                        <Agenda/>
                    </div>

                </>
        );
    }

}

export default App;

