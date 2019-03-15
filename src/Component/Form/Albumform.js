import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AlbumForm extends Component {
    render() {
        return (
            <Form>
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
        );
    }
}

export default AlbumForm;