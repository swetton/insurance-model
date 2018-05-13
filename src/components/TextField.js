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
      <div style={styles.container}>
        <label style={styles.label} htmlFor={name}>
          {label}
        </label>
        <div>
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
      </div>
    );
  }
}

const styles = {
  container: {
    width: '160px',
    height: '80px',
    backgroundColor: colors.white,
    margin: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    textAlign: 'center',
    color: colors.almostBlack,
    fontSize: '13px',
    fontFamily: 'Lato Medium',
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
