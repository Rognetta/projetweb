import React, {Component} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import './adminVue.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';


class AddArtist extends Component {

    constructor(props) {
        super(props);
        this.finalSubmit = this.finalSubmit.bind(this);
        this.handleOnChangeFollowers= this.handleOnChangeFollowers.bind(this);
        this.handleOnChangeDate= this.handleOnChangeDate.bind(this);
        this.handleOnChangeNom= this.handleOnChangeNom.bind(this);
    }

    state = {
        nom: null,
        birth: null,
        followers: null,
        albums: null
    }

    componentDidMount() {

    }

    finalSubmit(event) {
        console.log("A submit");

        //Random mongokey
        var mongoObjectId = function () {
            var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
            return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
                return (Math.random() * 16 | 0).toString(16);
            }).toLowerCase();
        };

        this.setState({albums: mongoObjectId()});

        axios.put("http://localhost:3000/artist", this.state);
    }

    handleOnChangeNom(event) {
        this.setState({value: event.target.value});
        this.setState({nom: event.target.value});
    }

    handleOnChangeDate(event) {
        this.setState({value: event.target.value});
        this.setState({birth: event.target.value});
    }

    handleOnChangeFollowers(event) {
        this.setState({value: event.target.value});
        this.setState({followers: event.target.value});
    }

    render() {
        return (
            <div>
                <Form className="form" id="frm">
                    <FormGroup >
                        <Label for="artistName">Nom de l'artiste</Label>
                        <Input type="text" name="artistName" id="artistName" value = {this.state.nom} onChange={this.handleOnChangeNom} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dateNaissanceArtiste">Date de Naissance de l'artiste</Label>
                        <Input type="date" name="dateNaissanceArtiste" id="dateNaissanceArtiste" value = {this.state.birth} onChange={this.handleOnChangeDate}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="followersNumber">Nombre de followers</Label>
                        <Input type="number" name="followersNumber" id="followersNumber" value = {this.state.followers} onChange={this.handleOnChangeFollowers}/>
                    </FormGroup>
                </Form>
                <Button className="buttonPerso" variant="success" onClick={this.finalSubmit}>Soumettre</Button>
            </div>
        );
    }
}

export {AddArtist};