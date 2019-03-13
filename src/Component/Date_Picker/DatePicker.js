import {Component} from "react";
import { DatePicker, message, Alert } from "antd";
import React from "react";

class Agenda extends Component {

    state = {
        date: null,
    };

    handleChange = date => {
        message.info(`Selected Date: ${date ? date.format("YYYY-MM-DD") : "None"}`);
        this.setState({ date });
    };

    render() {
        const { date } = this.state;
        return (
            <div style={{ width: 400, margin: "100px auto" }}>
                <DatePicker onChange={this.handleChange} />
                <div style={{ marginTop: 20 }}>
                    <Alert message={`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`} type="success" />
                </div>
            </div>
        );
    }
}

export {Agenda};