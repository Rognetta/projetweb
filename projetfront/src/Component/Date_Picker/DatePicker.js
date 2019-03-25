import {Component} from "react";
import { DatePicker, message, Alert } from "antd";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import "antd/dist/antd.css";
import "./DatePicker.css";

class Agenda extends Component {

    state = {
        date: null,
        collapse: false,
    };



    handleChange = date => {

        this.setState(state => ({ date , collapse: !state.collapse}));
    };

    render() {
        const { date } = this.state;
        return (
            <div className="datePick" style={{ width: 200, height: 150, margin: "auto", marginRight: 10}}>
                <p>Sélectionneur de date</p>
                <DatePicker onChange={this.handleChange} />
                <Collapse isOpen={this.state.collapse} style={{ marginTop: 20 }}>
                    <Alert message={`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`} type="success" />
                </Collapse>
            </div>
        );
    }
}

export {Agenda};