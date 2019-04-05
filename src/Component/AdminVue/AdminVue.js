import React, {Component} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import './adminVue.css';
import { Button } from 'react-bootstrap';
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/es/Row";
import axios from 'axios';
import Col from "react-bootstrap/es/Col";

class AdminVue extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        items : null
    }

    componentDidMount()
    {
        const item =[];
        axios.get("http://localhost:3000/artist")
            .then(({data}) => {
                for (var i = 0; i<data.length; i++)
                {
                    item.push(<h5 className="PARA" >Nom de l'artiste : {data[i].nom}</h5>)
                    console.log(data[i].title)
                }

                this.setState({items : item})
            })
    }

    render() {
        return (
            <Container >
                <h2>Liste des artistes en DB</h2>
                <Row>
                    <Col>
                    {this.state.items}
                    </Col>
                </Row>
                <Row>

                </Row>

            </Container>

        );
    }
}

export default AdminVue;