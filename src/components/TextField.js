import React, { Component } from 'react';
import { Field } from 'redux-form';

import colors from '../theme/colors';
import HelpIcon from './HelpIcon';

export default class TextField extends Component {
  render() {
    const {
      name,
      label,
      suffix,
    } = this.props;
    console.log(name);

    return (
      <Field name={name} component={({ input, meta: { touched, error, active } }) => (
        <div style={styles.container}>
          <label style={styles.label.container} htmlFor={name}>
            {label} <HelpIcon name={name} />
          </label>
          <div style={{ ...styles.field.container, ...(active ? styles.field.active : {}) }}>
            <input
              {...input}
              placeholder=''
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
    width: '100%',
    maxWidth: '165px',
    height: '80px',
    backgroundColor: colors.white,
    margin: '0 2px 2px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    container: {
      textAlign: 'center',
      color: colors.almostBlack,
      fontSize: '13px',
      fontFamily: 'Lato Medium',
      display: 'flex',
      alignItems: 'center',
    },
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
