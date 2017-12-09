import React, { Component } from 'react';
import { Field } from 'redux-form';

import normalizeDecimal from '../calculations/normalizeDecimal';
import colors from '../theme/colors';

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
          normalize={normalizeDecimal}
          style={styles.field}
        />
        <span style={styles.symbol}>
          %
        </span>
      </div>
    );
  }
}

const styles = {
  label: {
    width: '140px',
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
