import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Form.css';
import { Button } from 'react-bootstrap';

class AlbumForm extends Component {
    render() {
        return (
            <>
            <Form className="form">
                <FormGroup>
                    <Label for="artistName">Nom de l'artiste</Label>
                    <Input type="name" name="artistName" id="artistName"/>
                </FormGroup>
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
            </Form>
                <Button className="buttonPerso" variant="success">Soumettre</Button>
                </>
        );
    }
}

export default AlbumForm;