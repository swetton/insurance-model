import React from 'react';
import { Field } from 'redux-form';
import Radium from 'radium';

import colors from '../theme/colors';
import HelpIcon from './HelpIcon';

export default (props) => {
  const {
    name,
    label,
    suffix,
    verySmall,
    small,
  } = props;

  return (
    <Field name={name} component={Radium(({ input, meta: { touched, error, active } }) => (
      <div style={[
        styles.container,
        small && styles.small.container,
        verySmall && styles.verySmall.container,
      ]}>
        <label style={styles.label.container} htmlFor={name}>
          {label} <HelpIcon {...props} />
        </label>
        <div style={[styles.field.container, active && styles.field.active]}>
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
    ))}
    />
  );
};

const styles = {
  container: {
    width: 'calc(50% - 2px)',
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
  small: {
    container: {
      width: 'calc(100% * 1/3 - 2px)',
      minWidth: '150px',
    },
  },
  verySmall: {
    container: {
      width: 'calc(50% - 2px)',
      minWidth: '80px',
    },
  },
};
