import React, { Component } from 'react';

import CheckboxField from './CheckboxField';
import colors from '../theme/colors';

export default (props) => (
  <div
    style={{
      ...styles.container,
      ...(props.medium ? styles.medium.container : {}),
    }}
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

const styles = {
  container: {
    display: 'flex',
    padding: '0 5px',
    marginBottom: '2px',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    height: '40px',
    // height: '200px',
    // maxWidth: '60%',
    // width: '100%',
    // flexWrap: 'wrap',
  },
  medium: {
    container: {
      height: '60px',
    },
  },
};
