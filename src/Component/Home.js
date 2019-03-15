import React, { Component } from "react";
import {PieCharts} from "./Chart 1/PieChart";
import {LineCharts} from "./Chart_2/LineChart";
import {Agenda} from "./Date_Picker/DatePicker";
import {Contact} from "./Contact/Contact";

class Home extends Component {
    render() {
        return (
            <div className="charts">
                <PieCharts/>
                <LineCharts/>
                <Agenda/>
                <Contact/>
            </div>
        );
    }
}

export default Home;