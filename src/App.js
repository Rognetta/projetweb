import React, { Component } from 'react';
import './App.css';
import { PieCharts } from './Chart 1/PieChart';
import { Container, Row, Col } from 'reactstrap';
import { SideMenu } from './SideMenu/SideMenu';
import { LineCharts } from './Chart_2/LineChart';
import { Contact } from "./Contact/Contact";

class App extends Component {
  render() {
    return (
      <Container>
        <Contact/>
      </Container>
    );
  }
}

export default App;
