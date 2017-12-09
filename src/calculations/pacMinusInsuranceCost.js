const maybePrimaryCiCost = (inputs) => {
  if (!inputs.includePrimaryCiInsurance) return 0;

  return inputs.primaryCiCost;
}

const maybeSecondaryCiCost = (inputs) => {
  if (!inputs.includeSecondaryCiInsurance) return 0;

  return inputs.secondaryCiCost;
}

export default (inputs) => {
  return inputs.pacMonth - maybePrimaryCiCost(inputs) - maybeSecondaryCiCost(inputs);
};
