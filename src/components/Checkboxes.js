import React, { Component } from 'react';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';

import CheckboxField from './CheckboxField';
import colors from '../theme/colors';

const Checkboxes = ({ inputs: { primaryIllness, secondaryIllness } }) => {
  return (
    <div style={styles.container}>
      <CheckboxField
        name='includePrimaryCiInsurance'
        label='Include Primary CI Insurance'
        disabled={!primaryIllness}
      />

      <CheckboxField
        name='includeSecondaryCiInsurance'
        label='Include Secondary CI Insurance'
        disabled={!secondaryIllness}
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
}

export default connect(state => ({
  inputs: getFormValues('mainForm')(state),
}))(Checkboxes);

const styles = {
  container: {
    display: 'flex',
    padding: '10px 15px',
    marginBottom: '2px',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    // height: '200px',
    // maxWidth: '60%',
    // width: '100%',
    // flexWrap: 'wrap',
  },
};
