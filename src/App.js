import React, { Component } from 'react';
import _ from 'lodash';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';

import './theme/App.css';
import Chart from './components/Chart';
import MainForm from './components/MainForm';
import PortfoliosReturn from './calculations/PortfoliosReturn';
import MutualFundsReturn from './calculations/MutualFundsReturn';
import parseNumbersObject from './helpers/parseNumbersObject';

class App extends Component {
  ages() {
    return _.range(this.props.inputs.currentAge, this.props.inputs.retirementAge + 1);
  }

  invalidInputs() {
    const {
      currentAge,
      retirementAge,
    } = this.props.inputs;

    if (!currentAge) return true;
    if (!retirementAge) return true;
    if (currentAge > retirementAge) return true;

    return false;
  }

  result() {
    if (this.invalidInputs()) return [];

    return _.map(this.ages(), (age) => ({
      age,
      portfoliosReturn: _.round(new PortfoliosReturn(this.props.inputs).calculate(age)),
      mutualFundsReturn: _.round(new MutualFundsReturn(this.props.inputs).calculate(age)),
    }));
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <Chart data={this.result()} />
          <MainForm />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  inputs: parseNumbersObject(getFormValues('mainForm')(state)),
}))(App);

const styles = {
  container: {
    backgroundImage: 'url("bg.png")',
    backgroundSize: 'cover',
    minHeight: '100vh',
    minWidth: '100vw',
  },
  innerContainer: {
    padding: '20px 50px 50px',
  },
};
