import React, {Component} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import './adminVue.css';
import { Button } from 'react-bootstrap';
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/es/Row";
import axios from 'axios';
import Col from "react-bootstrap/es/Col";


class AddArtist extends Component {

    constructor(props) {
        super(props);
        this.finalSubmit = this.finalSubmit.bind(this);
        this.handleOnChangeDate = this.handleOnChangeDate(this);
        this.handleOnChangeFollowers = this.handleOnChangeFollowers(this);
        this.handleOnChangeNom = this.handleOnChangeNom(this);
    }

    state = {
        nom : null,
        birth : null,
        followers : null,
        albums : null,
    }

    componentDidMount() {

    }

    finalSubmit(event) {
        console.log("A submit");

        //Random mongokey
        var mongoObjectId = function () {
            var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
            return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
                return (Math.random() * 16 | 0).toString(16);
            }).toLowerCase();
        };

        this.setState({albums : mongoObjectId()});

        axios.push("http://localhost:3000/artist", this.state);
    }

    handleOnChangeNom(event) {
        this.setState({nom : event.target.value});
    }

    handleOnChangeDate(event) {
        this.setState({birth : event.target.value});
    }

    handleOnChangeFollowers(event) {
        this.setState({followers : event.target.value});
    }

    render() {
        return (
            <div>
                <Form className="form" id="frm">
                    <FormGroup>
                        <Label for="artistName">Nom de l'artiste</Label>
                        <select onChange={this.handleOnChangeNom}></select>
                        <Input type="name" name="artistName" id="artistName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="dateNaissanceArtiste">Date de Naissance de l'artiste</Label>
                        <select onChange={this.handleOnChangeDate}></select>
                        <Input type="date" name="dateNaissanceArtiste" id="dateNaissanceArtiste"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="followersNumber">Nombre de followers</Label>
                        <select onChange={this.handleOnChangeFollowers}></select>
                        <Input type="number" name="followersNumber" id="followersNumber"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="tracksIn">Albums réalisés : </Label>
                        <Label className="checkB">
                            <select>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </Label>
                        <input type="submit" value="Ajouter" className="checkB" />
                    </FormGroup>
                </Form>
                <Button className="buttonPerso" variant="success" onClick={this.finalSubmit}>Soumettre</Button>
            </div>
        );
    }
}

export {AddArtist};