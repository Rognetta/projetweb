import React, {Component} from 'react';
import './Home.css';
import {PieCharts} from './Chart 1/PieChart';
import {Container, Row, Col} from 'reactstrap';
import {LineCharts} from './Chart_2/LineChart';
import {Contact} from "./Contact/Contact";
import {Agenda} from "./Date_Picker/DatePicker";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MouseTracker} from "./MouseTracker/MouseTracker";
import axios from 'axios';

class Home extends Component {

    state = {
        artists: null,
        albums: null,
        tracks: null
    }

    componentDidMount() {
        axios.get("http://localhost:3000/artist")
            .then(({data}) => {
                this.setState({artists: data.length})
            })
        axios.get("http://localhost:3000/album")
            .then(({data}) => {

                for (var i = 0; i< data.length; i++)
                {
                    var tab = new Array(data.length);
                    tab[i] = data[i].title;
                }
                this.setState({albums : tab})
            })
        /*axios.get("http://localhost:3000/track")
            .then(res => {
                this.setState({tracks: res.data})
            })*/


    }

    render() {
        if(this.state.albums == null)
        {
            return (
                <div>Ta Gueule, ferme bien ta gueule !</div>
            )
        }
        return (
                <Container fluid className="containerPerso">
                    <Row>
                        <Row className="row100">
                            <Col sm = "6" md = "6" lg = "6">
                                <div className="lilBoxes">
                                    <h6>Nombres d'albums</h6>
                                    <p>46</p>
                                </div>
                                <div className="lilBoxes">
                                    <h6>Nombres artistes</h6>
                                    <p>{this.state.artists}</p>
                                </div>
                            </Col>

                            <Col sm = "6" md = "6" lg = "6">
                                <div className="lilBoxes">
                                    <h6>Nombres de Tracks</h6>
                                    <p>156</p>
                                </div>
                                <div className="lilBoxes">
                                    <h6>Nombres de followers</h6>
                                    <p>12 500</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>

                            <Col sm = "6" md = "6" lg = "6">
                            </Col>

                            <Col sm = "6" md = "6" lg = "6">
                            </Col>
                        </Row>
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
                                <MouseTracker/>
                            </Col>
                            <Col sm = "8" md = "6" lg = "4">
                                <Contact/>
                            </Col>

                            <Col sm = "8" md = "6" lg = "4">
                                <Agenda/>
                            </Col>
                        </Row>
                    </Row>
                </Container>
        );
    }

}

export default Home;

