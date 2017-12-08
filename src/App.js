import React, { Component } from 'react';
import Chart from './components/Chart';
import MainForm from './components/MainForm';

class App extends Component {
  render() {
    return (
      <div>
        <Chart />
        <MainForm />
      </div>
    );
  }
}

export default App;
