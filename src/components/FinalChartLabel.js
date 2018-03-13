import React, { Component } from 'react';
import _ from 'lodash';

import isLastDot from '../helpers/isLastDot';
import formatCurrency from '../helpers/formatCurrency';

export default class FinalChartLabel extends Component {
  render() {
    const {
      x,
      y,
      value,
      data,
      index,
    } = this.props;

    if (!isLastDot(data, index)) return null;

    return (
      <text
        x={x}
        y={y}
        dx={10}
        dy={1}
        textAnchor='left'
        fontWeight={600}
      >
        {formatCurrency(value)}
      </text>
    );
  }
}
