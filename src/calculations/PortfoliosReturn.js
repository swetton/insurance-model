import percentageToDecimal from './percentageToDecimal';
import pacMinusInsuranceCost from './pacMinusInsuranceCost';
import initialReturn from './initialReturn';
import ciReturn from './ciReturn';

export default class PortfoliosReturn {
  constructor(inputs) {
    this.inputs = inputs;
  }

  calculate(age) {
    if (age === this.inputs.currentAge) return initialReturn(this.inputs);

    return this.calculate(age - 1) * (1 + (percentageToDecimal(this.inputs.rateOfReturnPercentage) - percentageToDecimal(this.inputs.portfoliosFeesPercentage))) +
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
