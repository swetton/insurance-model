import _ from 'lodash';

export default class PortfoliosReturn {
  constructor(inputs) {
    this.inputs = inputs;
  }

  calculate(age) {
    if (age === this.inputs.currentAge) return this.initialReturn();

    return this.calculate(age - 1) * (1 + (this.inputs.rateOfReturn - this.inputs.portfoliosFees)) +
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
