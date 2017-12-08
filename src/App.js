import React, { Component } from 'react';
import _ from 'lodash';

import Chart from './components/Chart';
import MainForm from './components/MainForm';

class App extends Component {
  currentAge() {
    return 30;
  }

  retirementAge() {
    return 65;
  }

  ages() {
    return _.range(this.currentAge(), this.retirementAge());
  }

  primaryCiAmount() {
    return 69000;
  }

  primaryIllness() {
    return true;
  }

  primaryCiInsuranceReturns() {
    if (this.includePrimaryCiInsurance()) return 0;
    if (!this.primaryIllness()) return 0;

    return this.primaryCiAmount();
  }

  secondaryCiAmount() {
    return 92000;
  }

  secondaryIllness() {
    return true;
  }

  secondaryCiInsuranceReturns() {
    if (this.includeSecondaryCiInsurance()) return 0;
    if (!this.secondaryIllness()) return 0;

    return this.secondaryCiAmount();
  }

  yearsTillRetirement() {
    return this.retirementAge() - this.currentAge();
  }

  illnessEventAge() {
    return _.floor(this.currentAge() + this.yearsTillRetirement() / 2)
  }

  ciReturns(age) {
    if (age !== this.illnessEventAge()) return 0;

    return this.primaryCiInsuranceReturns() + this.secondaryCiInsuranceReturns();
  }

  rateOfReturn() {
    return 0.05;
  }

  ourFees() {
    return 0.005;
  };

  includePrimaryCiInsurance() {
    return true;
  }

  primaryCiCost() {
    return 33;
  }

  maybePrimaryCiCost() {
    if (!this.includePrimaryCiInsurance()) return 0;

    return this.primaryCiCost();
  }

  includeSecondaryCiInsurance() {
    return true;
  }

  secondaryCiCost() {
    return 47;
  }

  maybeSecondaryCiCost() {
    if (!this.includeSecondaryCiInsurance()) return 0;

    return this.secondaryCiCost();
  }

  pacMonth() {
    return 550;
  }

  pacMinusInsuranceCost() {
    return this.pacMonth() - this.maybePrimaryCiCost() - this.maybeSecondaryCiCost();
  }

  initialInvestment() {
    return 75000;
  }

  initialOurPlan() {
    return this.initialInvestment() + (this.pacMinusInsuranceCost() * 12);
  }

  ourPlan(age) {
    if (age === this.currentAge()) return this.initialOurPlan();

    return this.ourPlan(age - 1) * (1 + (this.rateOfReturn() - this.ourFees())) +
      12 * this.pacMinusInsuranceCost() - this.ciReturns(age);
  }

  result() {
    return _.map(this.ages(), (age) => ({
      age,
      ourPlan: _.round(this.ourPlan(age)),
      uv: 3000,
      pv: 1232,
      amt: 4211,
    }));
  }

  render() {
    return (
      <div>
        <Chart data={this.result()} />
        <MainForm />
      </div>
    );
  }
}

export default App;
