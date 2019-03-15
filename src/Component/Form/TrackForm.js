import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Form.css';
import { Button } from 'react-bootstrap';

class TrackFrom extends Component {
    render() {
        return (
            <>
            <Form className="form">
                <FormGroup>
                    <Label for="albumName">Nom de l'album</Label>
                    <Input type="name" name="albumName" id="albumName"/>
                </FormGroup>
                <FormGroup>
                    <Label for="title">Titre de la musique</Label>
                    <Input type="name" name="title" id="title"/>
                </FormGroup>
                <FormGroup>
                    <Label for="duration">Durée en minute</Label>
                    <Input type="number" name="title" id="title"/>
                </FormGroup>
                <FormGroup>
                    <Label for="listenings">Nombre d'écoute</Label>
                    <Input type="number" name="listenings" id="listenings"/>
                </FormGroup>
                <FormGroup>
                    <Label for="likes">Nombre de j'aime</Label>
                    <Input type="number" name="likes" id="likes"/>
                </FormGroup>
                <FormGroup>
                    <Label for="featuring">Artiste en featuring</Label>
                    <Input type="name" name="featuring" id="featuring"/>
                </FormGroup>

            </Form>
            <Button className="buttonPerso" variant="success">Soumettre</Button>
        </>
        );
    }
}

export default TrackFrom;