import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Form.css';
import { Button } from 'react-bootstrap';

class AlbumForm extends Component {

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
                    <Label for="albumName">Nom de l'album</Label>
                    <Input type="name" name="albumName" id="albumName"/>
                </FormGroup>
                <FormGroup>
                    <Label for="releaseDate">Date de sortie de l'album</Label>
                    <Input type="date" name="releaseDate" id="releaseDate"/>
                </FormGroup>
                <FormGroup>
                    <Label for="Genre">Genre de l'album</Label>
                    <Input type="name" name="Genre" id="Genre"/>
                </FormGroup>
                <FormGroup>
                    <Label for="coverUrl">Couverture de l'album</Label>
                    <Input type="url" name="coverUrl" id="coverUrl"/>
                </FormGroup>
                <FormGroup onSubmit = {this.handleSubmit}>
                    <Label for="tracksIn">Chansons de l'album : </Label>
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

export default AlbumForm;