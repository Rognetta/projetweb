import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ArtistForm extends Component {
    render() {
        return (
            <Form>
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
        );
    }
}

export default ArtistForm;