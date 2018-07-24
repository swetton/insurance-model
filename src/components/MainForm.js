import React, { Component } from 'react';
import {
  change,
} from 'redux-form';
import _ from 'lodash';
import Radium from 'radium';

import TextField from './TextField';

import illnessEventAge from '../calculations/illnessEventAge';

class MainForm extends Component {
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
    const {
      small,
    } = this.props;

    return (
      <div style={[styles.container, small && styles.small.container]}>
        <TextField
          name='initialInvestment'
          label='Initial investment'
          prefix='$'
          thousandSeparator
          {...this.props}
        />

        <TextField
          name='pacMonth'
          label='Monthly investment'
          prefix='$'
          thousandSeparator
          {...this.props}
        />

        <TextField
          name='primaryCiAmount'
          label='Your CI coverage amount'
          prefix='$'
          thousandSeparator
          {...this.props}
        />

        <TextField
          name='secondaryCiAmount'
          label="Your spouses' CI coverage amount"
          prefix='$'
          thousandSeparator
          {...this.props}
        />

        <TextField
          name='primaryCiCost'
          label='Primary CI cost'
          prefix='$'
          thousandSeparator
          {...this.props}
        />

        <TextField
          name='secondaryCiCost'
          label='Secondary CI cost'
          prefix='$'
          thousandSeparator
          {...this.props}
        />
        <TextField
          name='currentAge'
          label='Your current age'
          {...this.props}
        />

        <TextField
          name='retirementAge'
          label='Your retirement Age'
          {...this.props}
        />

        <TextField
          name='illnessEventAge'
          label='Age at illness event'
          {...this.props}
        />

        <TextField
          name='portfoliosFeesPercentage'
          label='Planswell Portfolios fees'
          suffix='％'
          {...this.props}
        />

        <TextField
          name='mutualFundsFeesPercentage'
          label='Mutual fund fees'
          suffix='％'
          tooltipUp
          {...this.props}
        />

        <TextField
          name='rateOfReturnPercentage'
          label='Rate of return'
          suffix='％'
          tooltipUp
          {...this.props}
        />
      </div>
    );
  }
}

export default Radium(MainForm);

const styles = {
  container: {
    maxWidth: '320px',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    flexShrink: 0,
  },
  small: {
    container: {
      maxWidth: '100%',
    },
  },
};
