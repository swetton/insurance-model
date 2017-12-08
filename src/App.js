import React, { Component } from 'react';
import _ from 'lodash';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';

import Chart from './components/Chart';
import MainForm from './components/MainForm';
import PortfoliosReturn from './calculations/PortfoliosReturn';
import MutualFundsReturn from './calculations/MutualFundsReturn';

class App extends Component {
  ages() {
    return _.range(this.props.inputs.currentAge, this.props.inputs.retirementAge + 1);
  }

  result() {
    return _.map(this.ages(), (age) => ({
      age,
      portfoliosReturn: _.round(new PortfoliosReturn(this.props.inputs).calculate(age)),
      mutualFundsReturn: _.round(new MutualFundsReturn(this.props.inputs).calculate(age)),
    }));
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Chart data={this.result()} />
        <MainForm />
      </div>
    );
  }
}

export default connect(state => ({
  inputs: getFormValues('mainForm')(state) || {},
}))(App);
