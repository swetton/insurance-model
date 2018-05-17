import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  reduxForm,
  formValueSelector,
  change,
} from 'redux-form';
import _ from 'lodash';

import colors from '../theme/colors';

import TextField from './TextField';

import illnessEventAge from '../calculations/illnessEventAge';

export default class MainForm extends Component {
  agesChanged(nextCurrentAge, nextRetirementAge) {
    return _.toInteger(this.props.currentAge) !== nextCurrentAge ||
      _.toInteger(this.props.retirementAge) !== nextRetirementAge;
  }

  agesValid(currentAge, retirementAge) {
    return currentAge <= retirementAge;
  }

  illnessEventInRange(currentAge, retirementAge, illnessEventAge) {
    return _.inRange(illnessEventAge, currentAge, retirementAge + 1)
  }

  componentWillUpdate(nextProps) {
    const nextCurrentAge = _.toInteger(nextProps.currentAge);
    const nextRetirementAge = _.toInteger(nextProps.retirementAge);
    const nextIllnessEventAge = _.toInteger(nextProps.illnessEventAge);

    if (!this.agesChanged(nextCurrentAge, nextRetirementAge)) return;
    if (!this.agesValid(nextCurrentAge, nextRetirementAge)) return;
    if (this.illnessEventInRange(nextCurrentAge, nextRetirementAge,
      nextIllnessEventAge)) return;

    this.props.dispatch(change('mainForm', 'illnessEventAge',
      illnessEventAge(nextCurrentAge, nextRetirementAge)));
  }

  render() {
    return (
      <div style={styles.container}>
          <TextField
            name='initialInvestment'
            label='Initial Investment'
            suffix='$'
          />

          <TextField
            name='pacMonth'
            label='PAC / Month'
            suffix='$'
          />

          <TextField
            name='primaryCiAmount'
            label='Primary CI Amount'
            suffix='$'
          />

          <TextField
            name='secondaryCiAmount'
            label='Secondary CI Amount'
            suffix='$'
          />

          <TextField
            name='primaryCiCost'
            label='Primary CI Cost'
            suffix='$'
          />

          <TextField
            name='secondaryCiCost'
            label='Secondary CI Cost'
            suffix='$'
          />
          <TextField
            name='currentAge'
            label='Current Age'
          />

          <TextField
            name='retirementAge'
            label='Retirement Age'
          />

          <TextField
            name='illnessEventAge'
            label='Illness Event Age'
          />

          <TextField
            name='portfoliosFeesPercentage'
            label='Portfolios Fees'
            suffix='%'
          />

          <TextField
            name='mutualFundsFeesPercentage'
            label='Mutual Fund Fees'
            suffix='%'
          />

          <TextField
            name='rateOfReturnPercentage'
            label='Avg Rate of Return'
            suffix='%'
          />
      </div>
    );
  }
}

const styles = {
  container: {
    // margin: '10px auto 0',
    // maxWidth: '900px',
    width: '40%',
    // maxWidth: '500px',
    // padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  column: {
  },
};
