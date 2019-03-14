import React, { Component } from 'react';
import './App.css';
import { PieCharts } from './Chart 1/PieChart';
import { Container, Row, Col } from 'reactstrap';
import {MySideMenu, SideMenu} from './SideMenu/SideMenu';
import { LineCharts } from './Chart_2/LineChart';

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
                    </div>

                </>
        );
    }
}

export default App;

