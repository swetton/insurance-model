import React, { Component } from 'react';
import _ from 'lodash';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import {
  reduxForm,
  formValueSelector,
  change,
} from 'redux-form';

import './theme/App.css';
import Chart from './components/Chart';
import MainForm from './components/MainForm';
import parseNumbersObject from './helpers/parseNumbersObject';
import illnessEventAge from './calculations/illnessEventAge';
import Checkboxes from './components/Checkboxes';

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <MainForm {...this.props} />
          <div style={styles.right}>
            <Checkboxes />
            <Chart {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

const defaultCurrentAge = 30;
const defaultRetirementAge = 65;

const ReduxFormOnApp = reduxForm({
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
})(App);

const formSelector = formValueSelector('mainForm');
export default connect(state => ({
  currentAge: formSelector(state, 'currentAge'),
  retirementAge: formSelector(state, 'retirementAge'),
  illnessEventAge: formSelector(state, 'illnessEventAge'),
}))(ReduxFormOnApp);

const styles = {
  container: {
    // backgroundImage: 'url("bg.png")',
    // backgroundSize: 'cover',
    // minHeight: '100vh',
    // minWidth: '100vw',
  },
  innerContainer: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  right: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
};
