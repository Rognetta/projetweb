import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PieCharts } from './Components/PieChart'

class App extends Component {
  render() {
    return (
      <div className="container fluid">

      <PieCharts/>

      </div>
    );
  }
}

export default App;
