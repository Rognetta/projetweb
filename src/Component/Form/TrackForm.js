import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Form.css';
import { Button } from 'react-bootstrap';

class TrackFrom extends Component {

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
                    <Label for="albumName">Nom de la musique</Label>
                    <Input type="name" name="albumName" id="albumName"/>
                </FormGroup>
                <FormGroup>
                    <Label for="release">Date de sortie</Label>
                    <Input type="date" name="title" id="title"/>
                </FormGroup>
                <FormGroup>
                    <Label for="listenings">Nombre d'écoutes</Label>
                    <Input type="number" name="listenings" id="listenings"/>
                </FormGroup>
                <FormGroup>
                    <Label for="likes">Nombre de j'aimes</Label>
                    <Input type="number" name="likes" id="likes"/>
                </FormGroup>
                <FormGroup onSubmit = {this.handleSubmit}>
                    <Label for="tracksIn">Artiste : </Label>
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

export default TrackFrom;