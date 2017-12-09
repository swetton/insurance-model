import React, { Component } from 'react';
import { Field } from 'redux-form';
import colors from '../theme/colors';

export default class TextField extends Component {
  render() {
    const {
      name,
      label,
      suffix,
    } = this.props;

    return (
      <div>
        <label style={styles.label} htmlFor={name}>
          {label}
        </label>
        <Field
          name={name}
          component='input'
          type='text'
          style={styles.field}
        />
        {suffix && <span style={styles.suffix}>
          {suffix}
        </span>}
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
  suffix: {
    display: 'inline-block',
    paddingLeft: '3px',
    color: colors.grey,
  },
};
