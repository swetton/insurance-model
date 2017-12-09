import pacMinusInsuranceCost from './pacMinusInsuranceCost';

export default (inputs) => {
  return inputs.initialInvestment + (pacMinusInsuranceCost(inputs) * 12);
};
