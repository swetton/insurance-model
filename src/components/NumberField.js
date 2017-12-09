import React, { Component } from 'react';
import { Field } from 'redux-form';

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
          style={styles.field}
        />
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
};
