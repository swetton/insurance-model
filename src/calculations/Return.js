import percentageToDecimal from './percentageToDecimal';
import pacMinusInsuranceCost from './pacMinusInsuranceCost';
import initialReturn from './initialReturn';
import ciReturn from './ciReturn';
import primaryCiInsuranceReturn from './primaryCiInsuranceReturn';
import secondaryCiInsuranceReturn from './secondaryCiInsuranceReturn';

export default class Return {
  constructor(inputs, feesPercentageKey) {
    this.inputs = inputs;
    this.feesPercentageKey = feesPercentageKey;
  }

  feesPercentage() {
    return this.inputs[this.feesPercentageKey];
  }

  calculate(age) {
    if (age === this.inputs.currentAge) return initialReturn(this.inputs);

    return this.calculate(age - 1) *
      (1 + (percentageToDecimal(this.inputs.rateOfReturnPercentage) - percentageToDecimal(this.feesPercentage()))) +
      12 * pacMinusInsuranceCost(this.inputs) -
      ciReturn(this.inputs, age, primaryCiInsuranceReturn(this.inputs), secondaryCiInsuranceReturn(this.inputs));
  }
}
