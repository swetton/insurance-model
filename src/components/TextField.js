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
      <Field name={name} component={({ input, meta: { touched, error, active } }) => (
        <div style={styles.container}>
          <label style={styles.label} htmlFor={name}>
            {label}
          </label>
          <div style={{ ...styles.field.container, ...(active ? styles.field.active : {}) }}>
            <input
              {...input}
              placeholder={label}
              type='text'
              style={styles.field.input}
            />
            {suffix && <span style={styles.field.suffix}>
              {suffix}
            </span>}
          </div>
        </div>
      )}
      />
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
    container: {
      width: 'calc(100% - 20px)',
      display: 'flex',
      justifyContent: 'center',
      borderBottom: `1px solid transparent`,
    },
    input: {
      textAlign: 'right',
      width: '80px',
      fontSize: '21px',
      fontWeight: 600,
      border: 0,
      outline: 0,
    },
    suffix: {
      display: 'inline-block',
      paddingLeft: '5px',
      fontSize: '21px',
      fontFamily: 'Lato Medium',
    },
    active: {
      borderBottom: `1px solid ${colors.blue}`,
    },
  },
};
