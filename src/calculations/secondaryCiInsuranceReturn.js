export default (inputs) => {
  if (inputs.includeSecondaryCiInsurance) return 0;
  if (!inputs.secondaryIllness) return 0;

  return inputs.secondaryCiAmount;
};
