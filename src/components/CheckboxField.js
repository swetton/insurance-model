import React, { Component } from 'react';
import { Field } from 'redux-form';

import colors from '../theme/colors';

export default class CheckboxField extends Component {
  render() {
    const {
      name,
      label,
    } = this.props;

    return (
      <div style={styles.container}>
        <label style={styles.label} htmlFor={name}>
          {label}
        </label>
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
    padding: '0 5px',
  },
  label: {
    display: 'inline-block',
    fontSize: '13px',
    // fontFamily: 'Lato Medium',
  },
};
