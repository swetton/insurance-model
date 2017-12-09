import _ from 'lodash';

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

    // diff fees
    return this.calculate(age - 1) * (1 + (percentageToDecimal(this.inputs.rateOfReturnPercentage) - percentageToDecimal(this.inputs.mutualFundsFeesPercentage))) +
      12 * pacMinusInsuranceCost(this.inputs) - ciReturn(this.inputs, age, this.primaryCiInsuranceReturn(), this.secondaryCiInsuranceReturn());
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
