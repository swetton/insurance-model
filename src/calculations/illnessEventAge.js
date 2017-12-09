import _ from 'lodash';

const yearsTillRetirement = (inputs) => {
  return inputs.retirementAge - inputs.currentAge;
};

export default (inputs) => {
  return _.floor(inputs.currentAge + yearsTillRetirement(inputs) / 2);
};
