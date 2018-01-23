import _ from 'lodash';

const yearsTillRetirement = (currentAge, retirementAge) => {
  return retirementAge - currentAge;
};

export default (currentAge, retirementAge) => {
  return _.floor(currentAge + yearsTillRetirement(currentAge, retirementAge) / 2);
};
