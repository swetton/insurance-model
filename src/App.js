import React, { Component } from 'react';
import Chart from './components/Chart';
import MainForm from './components/MainForm';

class App extends Component {
  result() {
    return [
      {age: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {age: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {age: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {age: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {age: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {age: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {age: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ];
  }

  render() {
    return (
      <div>
        <Chart data={this.result()} />
        <MainForm />
      </div>
    );
  }
}

export default App;
