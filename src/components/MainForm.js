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
          label='Initial Investment'
          prefix='$'
          thousandSeparator
          {...this.props}
        />

        <TextField
          name='pacMonth'
          label='PAC / Month'
          prefix='$'
          thousandSeparator
          {...this.props}
        />

        <TextField
          name='primaryCiAmount'
          label='Primary CI Amount'
          prefix='$'
          thousandSeparator
          {...this.props}
        />

        <TextField
          name='secondaryCiAmount'
          label='Secondary CI Amount'
          prefix='$'
          thousandSeparator
          {...this.props}
        />

        <TextField
          name='primaryCiCost'
          label='Primary CI Cost'
          prefix='$'
          thousandSeparator
          {...this.props}
        />

        <TextField
          name='secondaryCiCost'
          label='Secondary CI Cost'
          prefix='$'
          thousandSeparator
          {...this.props}
        />
        <TextField
          name='currentAge'
          label='Current Age'
          {...this.props}
        />

        <TextField
          name='retirementAge'
          label='Retirement Age'
          {...this.props}
        />

        <TextField
          name='illnessEventAge'
          label='Illness Event Age'
          {...this.props}
        />

        <TextField
          name='portfoliosFeesPercentage'
          label='Portfolios Fees'
          suffix='％'
          {...this.props}
        />

        <TextField
          name='mutualFundsFeesPercentage'
          label='Mutual Fund Fees'
          suffix='％'
          tooltipUp
          {...this.props}
        />

        <TextField
          name='rateOfReturnPercentage'
          label='Avg Rate of Return'
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
