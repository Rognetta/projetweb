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
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    render() {
        return (
            <>
            <div className="header">
                <h1>Les problèmes environnementaux</h1>
                <SideMenu/>
            </div>

                <Container fluid className="containerPerso">
                    <Row>
                        <Row>
                            <Col sm = "8" md = "6" lg = "5" >
                                <PieCharts />
                            </Col>
                            <Col sm = "8" md = "6" lg = "5" >
                                <LineCharts/>
                            </Col>
                        </Row>
                        <Row className="spacing">
                            <Col sm = "8" md = "6" lg = "4">
                                <ButtonForm/>
                            </Col>
                            <Col sm = "8" md = "6" lg = "5">
                                <Contact/>
                            </Col>

                            <Col sm = "8" md = "6" lg = "4">
                                <Agenda/>
                            </Col>
                            <Col sm = "8" md = "6" lg = "4" className="spacing">
                                <RouteTest/>
                            </Col>
                        </Row>
                    </Row>
                </Container>
                </>
        );
    }

}

export default App;

