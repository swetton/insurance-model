import React, { Component } from 'react';
import { Field } from 'redux-form';
import numeral from 'numeral';
import colors from '../theme/colors';

const currency = (value) => value && Number(value);

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
          normalize={currency}
          style={styles.field}
        />
        <span style={styles.symbol}>
          $
        </span>
      </div>
    );
  }
}

const styles = {
  label: {
    width: '170px',
    display: 'inline-block',
  },
  field: {
    textAlign: 'right',
    width: '80px',
    fontSize: '14px',
  },
  symbol: {
    display: 'inline-block',
    paddingLeft: '3px',
    color: colors.grey,
  },
};
