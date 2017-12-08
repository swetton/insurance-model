import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import colors from '../theme/colors';

import CurrencyField from './CurrencyField';
import NumberField from './NumberField';
import PercentField from './PercentField';
import CheckboxField from './CheckboxField';

class MainForm extends Component {
  render() {
    return (
      <div style={styles.container}>
        <CurrencyField
          name='initialInvestment'
          label='Initial Investment'
        />

        <CurrencyField
          name='pacMonth'
          label='PAC / Month'
        />

        <CurrencyField
          name='primaryCiAmount'
          label='Primary CI Amount'
        />

        <CurrencyField
          name='secondaryCiAmount'
          label='Secondary CI Amount'
        />

        <NumberField
          name='currentAge'
          label='Current Age'
        />

        <NumberField
          name='retirementAge'
          label='Retirement Age'
        />

        <PercentField
          name='portfoliosFees'
          label='Portfolios Fees'
        />

        <PercentField
          name='mutualFundsFees'
          label='Mutual Fund Fees'
        />

        <PercentField
          name='rateOfReturn'
          label='Avg Rate of Return'
        />

        <CheckboxField
          name='includePrimaryCiInsurance'
          label='Include Primary CI Insurance'
        />

        <CheckboxField
          name='includeSecondaryCiInsurance'
          label='Include Secondary CI Insurance'
        />

        <CheckboxField
          name='primaryIllness'
          label='Primary Illness'
        />

        <CheckboxField
          name='secondaryIllness'
          label='Secondary Illness'
        />
      </div>
    );
  }
}

export default reduxForm({
  form: 'mainForm',
  initialValues: {
    currentAge: 30,
    retirementAge: 65,
    primaryCiAmount: 69000,
    primaryIllness: true,
    secondaryCiAmount: 92000,
    secondaryIllness: true,
    rateOfReturn: 0.05,
    portfoliosFees: 0.005,
    mutualFundsFees: 0.023,
    includePrimaryCiInsurance: true,
    primaryCiCost: 33,
    includeSecondaryCiInsurance: true,
    secondaryCiCost: 47,
    pacMonth: 550,
    initialInvestment: 75000,
  },
})(MainForm);

const styles = {
  container: {
    backgroundColor: colors.white,
    margin: '0 auto',
  },
};
