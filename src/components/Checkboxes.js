import React from 'react';
import Radium from 'radium';

import CheckboxField from './CheckboxField';
import colors from '../theme/colors';

const Checkboxes = (props) => (
  <div
    style={[
      styles.container,
      props.medium && styles.medium.container,
      props.small && styles.small.container,
      props.verySmall && styles.verySmall.container,
    ]}
  >
    <CheckboxField
      name='includePrimaryCiInsurance'
      label='Include Primary CI Insurance'
      {...props}
    />

    <CheckboxField
      name='includeSecondaryCiInsurance'
      label='Include Secondary CI Insurance'
      {...props}
    />

    <CheckboxField
      name='primaryIllness'
      label='Primary Illness'
      {...props}
    />

    <CheckboxField
      name='secondaryIllness'
      label='Secondary Illness'
      {...props}
    />
  </div>
);

export default Radium(Checkboxes);

const styles = {
  container: {
    display: 'flex',
    padding: '0 5px',
    marginBottom: '2px',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    height: '40px',
  },
  medium: {
    container: {
      height: '60px',
    },
  },
  small: {
    container: {
      height: '80px',
      backgroundColor: colors.haze,
    },
  },
  verySmall: {
    container: {
      height: '120px',
    },
  },
};
