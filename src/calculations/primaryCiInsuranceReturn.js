export default (inputs) => {
  if (inputs.includePrimaryCiInsurance) return 0;
  if (!inputs.primaryIllness) return 0;

  return inputs.primaryCiAmount;
};
