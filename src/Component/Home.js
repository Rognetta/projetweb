import React, {Component} from 'react';
import './Home.css';
import {PieCharts} from "./Chart 1/PieChart";
import {Container, Row, Col} from 'reactstrap';
import {LineCharts} from './Chart_2/LineChart';
import {Contact} from "./Contact/Contact";
import {Agenda} from "./Date_Picker/DatePicker";
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    render() {
        return (
            <>
                <Container fluid className="containerPerso">
                    <Row>
                        <Row>
                            <Col sm = "8" md = "6" lg = "5" >
                                <PieCharts/>
                            </Col>

                            <Col sm = "8" md = "6" lg = "5" >
                                <LineCharts/>
                            </Col>
                        </Row>
                        <Row className="spacing">
                            <Col sm = "8" md = "6" lg = "4">
                                <Contact/>
                            </Col>
                            <Col sm = "8" md = "6" lg = "5">
                                <Contact/>
                            </Col>

                            <Col sm = "8" md = "6" lg = "4">
                                <Agenda/>
                            </Col>
                            <Col sm = "8" md = "6" lg = "4" className="spacing">
                                <Contact/>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </>
    );
    }
}

export default Home;