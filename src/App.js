import React, { Component } from 'react';
import './App.css';
import { PieCharts } from './Chart 1/PieChart';
import { Container, Row, Col } from 'reactstrap';
import { SideMenu } from './SideMenu/SideMenu';
import { LineCharts } from './Chart_2/LineChart';

class App extends Component {
  render() {
    return (
      <Container>
        <LineCharts/>
      </Container>
    );
  }
}

export default App;
