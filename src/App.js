import React, { Component } from 'react';
import _ from 'lodash';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  reduxForm,
  formValueSelector,
  change,
} from 'redux-form';
import windowSize from 'react-window-size';

import './theme/App.css';
import Chart from './components/Chart';
import MainForm from './components/MainForm';
import parseNumbersObject from './helpers/parseNumbersObject';
import illnessEventAge from './calculations/illnessEventAge';
import Checkboxes from './components/Checkboxes';

class App extends Component {
  render() {
    const verySmall = this.props.windowWidth < 460;
    const small = this.props.windowWidth < 900;
    const medium = this.props.windowWidth < 1150;

    const extraProps = {
      verySmall,
      small,
      medium,
    };

    return (
      <div
        style={{
          ...styles.container,
          ...(small ? styles.small.container : {})
        }}
      >
        <MainForm
          {...this.props}
          {...extraProps}
        />
        <div
          style={{
          ...styles.chartAndCheckboxes,
          ...(small ? styles.small.chartAndCheckboxes : {}),
          }}
        >
          <Checkboxes
            {...this.props}
            {...extraProps}
          />
          <Chart
            {...this.props}
            {...extraProps}
          />
        </div>
      </div>
    );
  }
}

const defaultCurrentAge = 30;
const defaultRetirementAge = 65;

const formSelector = formValueSelector('mainForm');
export default compose(
  reduxForm({
    form: 'mainForm',
    initialValues: {
      currentAge: defaultCurrentAge,
      retirementAge: defaultRetirementAge,
      illnessEventAge: illnessEventAge(defaultCurrentAge, defaultRetirementAge),
      primaryCiAmount: 69000,
      primaryIllness: true,
      secondaryCiAmount: 92000,
      secondaryIllness: true,
      rateOfReturnPercentage: 5,
      portfoliosFeesPercentage: 0.68,
      mutualFundsFeesPercentage: 2.3,
      includePrimaryCiInsurance: true,
      primaryCiCost: 33,
      includeSecondaryCiInsurance: true,
      secondaryCiCost: 47,
      pacMonth: 550,
      initialInvestment: 75000,
    },
  }),
  connect(state => ({
    currentAge: formSelector(state, 'currentAge'),
    retirementAge: formSelector(state, 'retirementAge'),
    illnessEventAge: formSelector(state, 'illnessEventAge'),
  })),
  windowSize,
)(App);

const styles = {
  container: {
    display: 'flex',
    // justifyContent: 'center',
    // maxWidth: '80vw',
    // width: '100%',
    // margin: '0 auto',
  },
  chartAndCheckboxes: {
    // width: '100%',
    // width: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    maxWidth: 'calc(100% - 320px)',
  },
  small: {
    container: {
      flexDirection: 'column-reverse',
    },
    chartAndCheckboxes: {
      flexDirection: 'column-reverse',
      maxWidth: 'inherit',
    },
  },
};
