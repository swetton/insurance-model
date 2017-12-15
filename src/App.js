import React, { Component } from 'react';
import _ from 'lodash';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';

import './theme/App.css';
import Chart from './components/Chart';
import MainForm from './components/MainForm';
import Return from './calculations/Return';
import parseNumbersObject from './helpers/parseNumbersObject';

class App extends Component {
  ages() {
    return _.range(this.props.inputs.currentAge, this.props.inputs.retirementAge + 1);
  }

  inputsValid() {
    const {
      currentAge,
      retirementAge,
    } = this.props.inputs;

    if (!currentAge) return false;
    if (!retirementAge) return false;
    if (currentAge > retirementAge) return false;

    return true;
  }

  result() {
    if (!this.inputsValid()) return [];

    return _.map(this.ages(), (age) => ({
      age,
      portfoliosReturn: _.round(new Return(this.props.inputs, 'mutualFundsFeesPercentage').calculate(age)),
      mutualFundsReturn: _.round(new Return(this.props.inputs, 'portfoliosFeesPercentage').calculate(age)),
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
    padding: '20px',
  },
};
