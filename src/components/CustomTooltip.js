import React, { Component } from 'react';
import Radium from 'radium';
import _ from 'lodash';

import colors from '../theme/colors';

const INCLUDED = [
  'Planswell Portfolios',
  'Mutual Funds',
]

const filter = (payload) => (
  _.filter(payload, ({ name }) => (
    _.includes(INCLUDED, name)
  ))
)

class Tooltip extends Component {
  savings() {
    return this.getData('portfoliosReturn').value -
      this.getData('mutualFundsReturn').value;
  }

  getData(dataKey) {
    const {
      payload,
    } = this.props;

    return _.find(payload, { dataKey });
  }

  render() {
    const {
      active,
      label,
      payload,
      formatter,
    } = this.props;

    if (!active) return null;
    if (!payload) return null;

    return (
      <div style={styles.container}>
        <div style={[styles.line, styles.age]}>
          Age: {label}
        </div>

        {_.map(filter(payload), ({ name, value, stroke }) => (
          <div key={name} style={{ ...styles.line, ...{ color: stroke }}}>
            {name}: {formatter(value)}
          </div>
        ))}

        <div style={[styles.line, styles.savings]}>
          Savings: {formatter(this.savings())}
        </div>
      </div>
    );
  }
};

export default Radium(Tooltip);

const styles = {
  container: {
    border: 0,
      boxShadow: `1px 1px 15px ${colors.shadowBlack}`,
      borderRadius: '5px',
      background: colors.white,
      padding: '10px',
  },
  line: {
    paddingBottom: '5px',
  },
  age: {
    fontWeight: 600,
    fontSize: '18px',
    paddingBottom: '10px',
  },
  savings: {
    fontWeight: 600,
  },
};
