import React, { Component } from 'react';
import './App.css';
import { PieCharts } from './Chart 1/PieChart';
import { Container, Row, Col } from 'reactstrap';
import { SideMenu } from './SideMenu/SideMenu';

class App extends Component {
  render() {
    return (
      <Container>
      <Row>
        <Col sm = "2" md = "4">
          <SideMenu/>
        </Col>
        <Col sm = "10" md = "8">
            <PieCharts/>
        </Col>
      </Row>
      </Container>
    );
  }
}

export default App;
