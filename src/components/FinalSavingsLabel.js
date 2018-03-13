import React, { Component } from 'react';
import numeral from 'numeral';
import _ from 'lodash';
import {
  Rectangle,
} from 'recharts';

export default class FinalSavingsLabel extends Component {
  lastDot() {
    const {
      data,
      index
    } = this.props;

    return _.findLastIndex(data) === index;
  }

  renderSavings() {
  }

  render() {
    if (!this.lastDot()) return null;

    const {
      x: dotX,
      y: dotY,
      value,
    } = this.props;

    const x = dotX - 150;
    const y = dotY + 10;

    return (
      <g>
        <rect
          x={x}
          y={y}
          dy={20}
          width={150}
          height={30}
          fill='#fff'
          stroke='#000'
        />
        <text
          x={x}
          y={y}
          dx={10}
          dy={20}
          textAnchor='left'
          fontWeight={600}
        >
          Savings: {value}
        </text>
      </g>
    );
  }
}
