import React from 'react';
import { Field } from 'redux-form';
import Inner from './Inner';

export default (opts) => (
  <Field
    name={opts.name}
    component={Inner}
    opts={opts}
  />
);
