import React, { Component } from 'react';
import { Field } from 'redux-form';

export default class CheckboxField extends Component {
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
          type='checkbox'
        />
      </div>
    );
  }
}

const styles = {
  container: {
  },
  label: {
    width: '250px',
    display: 'inline-block',
  },
};
