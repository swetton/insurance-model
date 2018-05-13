import React, { Component } from 'react';

import colors from '../theme/colors';
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
      backgroundColor,
    } = this.props;

    if (!isLastDot(data, index)) return null;

    return (
      <g>
        <rect
          fill={backgroundColor}
          x={x}
          y={y + 10}
          width='70'
          height='26'
          rx='5'
          ry='5'
        />
        <text
          x={x}
          y={y + 10}
          dx={10}
          dy={17}
          textAnchor='left'
          fill={colors.white}
          style={{ fontSize: '12px' }}
        >
          {formatCurrency(value)}
        </text>
      </g>
    );
  }
}
