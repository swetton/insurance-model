import illnessEventAge from './illnessEventAge';

export default (inputs, age, primaryCiInsuranceReturn, secondaryCiInsuranceReturn) => {
  if (age !== illnessEventAge(inputs)) return 0;

  return primaryCiInsuranceReturn + secondaryCiInsuranceReturn;
};
