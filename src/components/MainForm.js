import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class MainForm extends Component {
  render() {
    return (
      <div>
        Main Form

        <div>
          <label htmlFor='initialInvestment'>Initial Investment</label>
          <Field name='initialInvestment' component='input' type='text' />
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'mainForm'
})(MainForm);
