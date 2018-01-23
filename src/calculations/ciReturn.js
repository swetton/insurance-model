export default (inputs, age, primaryCiInsuranceReturn, secondaryCiInsuranceReturn) => {
  if (age !== inputs.illnessEventAge) return 0;

  return primaryCiInsuranceReturn + secondaryCiInsuranceReturn;
};
