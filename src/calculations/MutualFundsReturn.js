import percentageToDecimal from './percentageToDecimal';
import pacMinusInsuranceCost from './pacMinusInsuranceCost';
import initialReturn from './initialReturn';
import ciReturn from './ciReturn';

export default class MutualFundsReturn {
  constructor(inputs) {
    this.inputs = inputs;
  }

  calculate(age) {
    if (age === this.inputs.currentAge) return initialReturn(this.inputs);

    // difference from PortfoliosReturn here is mutualFundsFeesPercentage variable
    return this.calculate(age - 1) * (1 + (percentageToDecimal(this.inputs.rateOfReturnPercentage) - percentageToDecimal(this.inputs.mutualFundsFeesPercentage))) +
      12 * pacMinusInsuranceCost(this.inputs) - ciReturn(this.inputs, age, this.primaryCiInsuranceReturn(), this.secondaryCiInsuranceReturn());
  }

  primaryCiInsuranceReturn() {
    // difference from PortfoliosReturn here is this missing line:
    // if (this.inputs.includePrimaryCiInsurance) return 0;
    if (!this.inputs.primaryIllness) return 0;

    return this.inputs.primaryCiAmount;
  }

  secondaryCiInsuranceReturn() {
    // difference from PortfoliosReturn here is this missing line:
    // if (this.inputs.includeSecondaryCiInsurance) return 0;
    if (!this.inputs.secondaryIllness) return 0;

    return this.inputs.secondaryCiAmount;
  }

}
