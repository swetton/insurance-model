import React, { Component } from 'react';
import { Field } from 'redux-form';
import numeral from 'numeral';

const number = (value) => value && Number(value);

export default class NumberField extends Component {
  render() {
    const {
      name,
      label,
    } = this.props;

    return (
      <div>
        <label style={styles.label} htmlFor={name}>{label}</label>
        <Field
          name={name}
          component='input'
          type='text'
          normalize={number}
        />
      </div>
    );
  }
}

const styles = {
  container: {
  },
  label: {
    width: '140px',
    display: 'inline-block',
  },
};
