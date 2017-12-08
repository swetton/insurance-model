import React, { Component } from 'react';
import _ from 'lodash';

import Chart from './components/Chart';
import MainForm from './components/MainForm';
import PortfoliosReturn from './calculations/PortfoliosReturn';
import MutualFundsReturn from './calculations/MutualFundsReturn';

class App extends Component {
  ages() {
    return _.range(this.inputs().currentAge, this.inputs().retirementAge + 1);
  }

  inputs() {
    return {
      currentAge: 30,
      retirementAge: 65,
      primaryCiAmount: 69000,
      primaryIllness: true,
      secondaryCiAmount: 92000,
      secondaryIllness: true,
      rateOfReturn: 0.05,
      portfoliosFees: 0.005,
      mutualFundsFees: 0.023,
      includePrimaryCiInsurance: true,
      primaryCiCost: 33,
      includeSecondaryCiInsurance: true,
      secondaryCiCost: 47,
      pacMonth: 550,
      initialInvestment: 75000,
    };
  }

  result() {
    return _.map(this.ages(), (age) => ({
      age,
      portfoliosReturn: _.round(new PortfoliosReturn(this.inputs()).calculate(age)),
      mutualFundsReturn: _.round(new MutualFundsReturn(this.inputs()).calculate(age)),
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
