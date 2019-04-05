import React, {Component} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import './Form.css';
import { Button } from 'react-bootstrap';

class ArtistForm extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <>
            <Form className="form">
                <FormGroup>
                    <Label for="artistName">Nom de l'artiste</Label>
                    <Input type="name" name="artistName" id="artistName"/>
                </FormGroup>
                <FormGroup>
                    <Label for="dateNaissanceArtiste">Date de Naissance de l'artiste</Label>
                    <Input type="date" name="dateNaissanceArtiste" id="dateNaissanceArtiste"/>
                </FormGroup>
                <FormGroup>
                    <Label for="followersNumber">Nombre de followers</Label>
                    <Input type="number" name="followersNumber" id="followersNumber"/>
                </FormGroup>
                <FormGroup onSubmit = {this.handleSubmit}>
                    <Label for="tracksIn">Albums réalisés : </Label>
                    <Label className="checkB">
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select></Label>
                    <input type="submit" value="Ajouter" className="checkB" />
                </FormGroup>
            </Form>
                <Button className="buttonPerso" variant="success">Soumettre</Button>
                </>
        );
    }
}

export default ArtistForm;