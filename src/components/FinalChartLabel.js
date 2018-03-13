import React, { Component } from 'react';
import _ from 'lodash';

import formatCurrency from '../helpers/formatCurrency';

export default class FinalChartLabel extends Component {
  lastDot() {
    const {
      data,
      index
    } = this.props;

    return _.findLastIndex(data) === index;
  }

  render() {
    if (!this.lastDot()) return null;

    const {
      x,
      y,
      value,
    } = this.props;

    return (
      <text
        x={x}
        y={y}
        dx={10}
        textAnchor='left'
        fontWeight={600}
      >
        {formatCurrency(value)}
      </text>
    );
  }
}
