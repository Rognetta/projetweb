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

class App extends React.Component {

    render() {
        return (
                <Container>
                    <div className="header">
                        <SideMenu/>
                    </div>
                    <Row>
                        <Row>
                            <Col sm = "6" md = "6" lg = "6">
                                <PieCharts/>
                            </Col>
                            <Col sm = "6" md = "6" lg = "6">
                                <LineCharts/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Contact/>
                            </Col>
                            <Col>
                                <Agenda/>
                                <ButtonForm/>
                                <RouteTest/>
                            </Col>
                        </Row>
                    </Row>

                </Container>
        );
    }

}

export default App;

