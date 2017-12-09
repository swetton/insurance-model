import React, { Component } from 'react';
import numeral from 'numeral';
import _ from 'lodash';

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
        {numeral(value).format('$0,0')}
      </text>
    );
  }
}
