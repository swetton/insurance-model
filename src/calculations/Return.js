import percentageToDecimal from './percentageToDecimal';
import pacMinusInsuranceCost from './pacMinusInsuranceCost';
import initialReturn from './initialReturn';
import ciReturn from './ciReturn';

export default class PortfoliosReturn {
  constructor(inputs, feesPercentageKey) {
    this.inputs = inputs;
    this.feesPercentageKey = feesPercentageKey;
  }

  feesPercentage() {
    return this.inputs[this.feesPercentageKey];
  }

  calculate(age) {
    if (age === this.inputs.currentAge) return initialReturn(this.inputs);

    return this.calculate(age - 1) * (1 + (percentageToDecimal(this.inputs.rateOfReturnPercentage) - percentageToDecimal(this.feesPercentage()))) +
      12 * pacMinusInsuranceCost(this.inputs) - ciReturn(this.inputs, age, this.primaryCiInsuranceReturn(), this.secondaryCiInsuranceReturn());
  }

  primaryCiInsuranceReturn() {
    if (this.inputs.includePrimaryCiInsurance) return 0;
    if (!this.inputs.primaryIllness) return 0;

    return this.inputs.primaryCiAmount;
  }

  secondaryCiInsuranceReturn() {
    if (this.inputs.includeSecondaryCiInsurance) return 0;
    if (!this.inputs.secondaryIllness) return 0;

    return this.inputs.secondaryCiAmount;
  }

}
