import React, {Component} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import './Form.css';
import { Button } from 'react-bootstrap';

class ArtistForm extends Component {
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
            </Form>
                <Button className="buttonPerso" variant="success">Soumettre</Button>
                </>
        );
    }
}

export default ArtistForm;