import React from 'react';
import { Field } from 'redux-form';
import Inner from './Inner'

export default (innerProps) => (
  <Field
    name={innerProps.name}
    component={Inner}
    innerProps={innerProps}
  />
)
