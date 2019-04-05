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
        nbAlbums: null,
        nbEcoutes: null,
        moyDureeEcouteMin: null,
        moyDureeEcouteSec: null,
        nbFollower: null
    }

    componentDidMount() {
        axios.get("http://localhost:3000/album")
            .then(({data}) => {
                this.setState({nbAlbums : data.length})
            })

        axios.get("http://localhost:3000/track")
            .then(({data}) => {

                let i;
                let nbListenings = 0;
                let moy = 0;

                for (i = 0; i < data.length; i++)
                {
                    nbListenings += data[i].listenings;
                    moy += data[i].duration;
                }

                moy = moy/i;
                console.log(moy);
                let sec = moy % 60;
                sec = Math.trunc(sec);
                console.log(sec);
                let min = (moy - sec) / 60;
                min = Math.trunc(min);
                console.log(min);

                this.setState({nbEcoutes : nbListenings})
                this.setState({moyDureeEcouteMin : min})
                this.setState({moyDureeEcouteSec : sec})
            })

        axios.get("http://localhost:3000/artist")
            .then(({data}) => {

                let i;
                let nbFol = 0;

                for (i = 0; i < data.length; i++) {
                    nbFol += data[i].followers;
                }
                this.setState({nbFollower : nbFol})
            })

    }

    render() {
        return (
                <Container fluid className="containerPerso">
                    <Row>
                        <Row className="row100">
                            <Col sm = "6" md = "6" lg = "6">
                                <div className="lilBoxes">
                                    <h6>Nombre d'albums</h6>
                                    <p>{this.state.nbAlbums}</p>
                                </div>
                                <div className="lilBoxes">
                                    <h6>Nombre total d'écoute</h6>
                                    <p>{this.state.nbEcoutes}</p>
                                </div>
                            </Col>

                            <Col sm = "6" md = "6" lg = "6">
                                <div className="lilBoxes">
                                    <h6>Moyenne de durée des chansons</h6>
                                    <p>{this.state.moyDureeEcouteMin} minutes et {this.state.moyDureeEcouteSec} secondes</p>
                                </div>
                                <div className="lilBoxes">
                                    <h6>Nombre de followers total</h6>
                                    <p>{this.state.nbFollower}</p>
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

