import _ from 'lodash';

import percentageToDecimal from './percentageToDecimal';

export default class MutualFundsReturn {
  constructor(inputs) {
    this.inputs = inputs;
  }

  calculate(age) {
    if (age === this.inputs.currentAge) return this.initialReturn();

    // diff fees
    return this.calculate(age - 1) * (1 + (percentageToDecimal(this.inputs.rateOfReturnPercentage) - percentageToDecimal(this.inputs.mutualFundsFeesPercentage))) +
      12 * this.pacMinusInsuranceCost() - this.ciReturn(age);
  }

  initialReturn() {
    return this.inputs.initialInvestment + (this.pacMinusInsuranceCost() * 12);
  }

  pacMinusInsuranceCost() {
    return this.inputs.pacMonth - this.maybePrimaryCiCost() - this.maybeSecondaryCiCost();
  }

  maybePrimaryCiCost() {
    if (!this.inputs.includePrimaryCiInsurance) return 0;

    return this.inputs.primaryCiCost;
  }

  maybeSecondaryCiCost() {
    if (!this.inputs.includeSecondaryCiInsurance) return 0;

    return this.inputs.secondaryCiCost;
  }

  ciReturn(age) {
    if (age !== this.illnessEventAge()) return 0;

    return this.primaryCiInsuranceReturn() + this.secondaryCiInsuranceReturn();
  }

  yearsTillRetirement() {
    return this.inputs.retirementAge - this.inputs.currentAge;
  }

  illnessEventAge() {
    return _.floor(this.inputs.currentAge + this.yearsTillRetirement() / 2)
  }

  primaryCiInsuranceReturn() {
    // diff
    // if (this.inputs.includePrimaryCiInsurance) return 0;
    if (!this.inputs.primaryIllness) return 0;

    return this.inputs.primaryCiAmount;
  }

  secondaryCiInsuranceReturn() {
    // diff
    // if (this.inputs.includeSecondaryCiInsurance) return 0;
    if (!this.inputs.secondaryIllness) return 0;

    return this.inputs.secondaryCiAmount;
  }

}
