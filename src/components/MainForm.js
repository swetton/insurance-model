import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import colors from '../theme/colors';

import CurrencyField from './CurrencyField';
import NumberField from './NumberField';
import PercentField from './PercentField';
import CheckboxField from './CheckboxField';

class MainForm extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.column}>
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
        </div>

        <div style={styles.column}>
          <NumberField
            name='currentAge'
            label='Current Age'
          />

          <NumberField
            name='retirementAge'
            label='Retirement Age'
          />

          <PercentField
            name='portfoliosFeesPercentage'
            label='Portfolios Fees'
          />

          <PercentField
            name='mutualFundsFeesPercentage'
            label='Mutual Fund Fees'
          />

          <PercentField
            name='rateOfReturnPercentage'
            label='Avg Rate of Return'
          />
        </div>

        <div style={styles.column}>
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
    rateOfReturnPercentage: 5,
    portfoliosFeesPercentage: 0.5,
    mutualFundsFeesPercentage: 2.3,
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
    margin: '10px auto 0',
    maxWidth: '900px',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    border: `1px solid ${colors.grey}`,
  },
  column: {
  },
};
