import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Form.css';
import axios from 'axios';

class DeleteATrack extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleClic = this.handleClic.bind(this);

    }

    state = {
        items : null,
        idToS : null
    }

    componentDidMount()
    {
        const item =[];
        axios.get("http://localhost:3000/track")
            .then(({data}) => {
                for (var i = 0; i<data.length; i++)
                {
                   item.push(<option value={data[i]._id}>{ data[i].title }</option>)
                }

                this.setState({items : item})
            })
    }


    handleChange(event) {
        this.setState({value: event.target.value});
        this.setState({idToS: event.target.value});
        console.log(event.target.value)

    }

    handleClic(event) {

    this.componentDidMount()
        {
            axios.delete("http://localhost:3000/track/" + this.state.idToS)
            document.location.reload(true)
        }
    }


    render() {

        return (
            <Form className="form">
                <FormGroup>
                    <Label for="tracksIn">Supprimer une chanson </Label>
                    <Label className="checkB">
                        <select onChange={this.handleChange}>
                            <option defaultValue={"value"}>Choose Here</option>
                            {this.state.items}
                        </select>
                    </Label>
                    <input  onClick = {this.handleClic} type="button" value="Supprimer" className="checkB" />
                </FormGroup>
            </Form>
        );
    }
}

export default DeleteATrack;