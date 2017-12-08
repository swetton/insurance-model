import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import colors from '../theme/colors';

const number = (value) => value && Number(value);

class MainForm extends Component {
  render() {
    return (
      <div style={styles.container}>
        Main Form

        <div>
          <label htmlFor='initialInvestment'>Initial Investment</label>
          <Field
            name='initialInvestment'
            component='input'
            type='text'
            normalize={number}
          />
        </div>

        <div>
          <label htmlFor='pacMonth'>PAC / Month</label>
          <Field
            name='pacMonth'
            component='input'
            type='text'
            normalize={number}
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
