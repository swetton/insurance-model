import React, { Component } from 'react';

import CheckboxField from './CheckboxField';

export default (props) => (
  <div style={styles.container}>
    <CheckboxField
      name='includePrimaryCiInsurance'
      label='Include Primary CI Insurance'
    />

    <CheckboxField
      name='includeSecondaryCiInsurance'
      label='Include Secondary CI Insurance'
    />

    <CheckboxField
      name='primaryIllness'
      label='Primary Illness'
    />

    <CheckboxField
      name='secondaryIllness'
      label='Secondary Illness'
    />
  </div>
);

const styles = {
  container: {
  },
};
