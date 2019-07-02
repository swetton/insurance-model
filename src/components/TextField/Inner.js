import React from 'react'
import Radium from 'radium';
import NumberFormat from 'react-number-format';
import colors from '../../theme/colors';
import HelpIcon from '../HelpIcon';

export default Radium(({
  input,
  meta: {
    touched,
    error,
    active,
  },
  opts: {
    name,
    label,
    suffix,
    prefix,
    thousandSeparator,
    verySmall,
    small,
  },
  opts,
}) => (
  <div
    style={[
      styles.container,
      small && styles.small.container,
      verySmall && styles.verySmall.container,
    ]}
  >
    <label style={styles.label.container} htmlFor={name}>
      {label} <HelpIcon {...opts} />
    </label>
    <div style={[styles.field.container, active && styles.field.active]}>
      <NumberFormat
        {...input}
        placeholder=''
        type='text'
        thousandSeparator={thousandSeparator}
        style={styles.field.input}
        prefix={prefix && prefix + ' '}
        suffix={suffix && ' ' + suffix}
      />
    </div>
  </div>
));

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
      width: '100%',
      fontSize: '21px',
      fontWeight: 600,
      border: 0,
      outline: 0,
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
      minWidth: 'initial',
    },
  },
};
