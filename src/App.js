import React, { Component } from 'react';
import './App.css';
import { PieCharts } from './Component/Chart 1/PieChart';
import { Container, Row, Col } from 'reactstrap';
import { SideMenu } from './Component/SideMenu/SideMenu';
import { LineCharts } from './Component/Chart_2/LineChart';
import { Contact } from "./Component/Contact/Contact";
import {Agenda} from "./Component/Date_Picker/DatePicker";

class App extends Component {
  render() {
    return (
      <Container>
        <Agenda/>
      </Container>
    );
  }
}

export default App;
