import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';

const number = (value) => value && _.parseInt(value);

class MainForm extends Component {
  render() {
    return (
      <div>
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
