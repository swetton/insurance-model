import React, { Component } from 'react';
import _ from 'lodash';
import isLastDot from '../helpers/isLastDot';
import formatCurrency from '../helpers/formatCurrency';

export default class FinalSavingsLabel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };
  }

  handleMouseLeave() {
    this.setState({
      hover: false,
    });
  }

  handleMouseEnter() {
    this.setState({
      hover: true,
    });
  }

  render() {
    const {
      x: dotX,
      y: dotY,
      value,
      data,
      index,
    } = this.props;

    if (!isLastDot(data, index)) return null;

    const {
      hover,
    } = this.state;

    const x = dotX - 70;
    const y = dotY + 10;
    const savingsNumberLength = _.toString(formatCurrency(value)).length;

    return (
      <g
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        style={{ opacity: hover ? 0 : 1 }}
      >
        <rect
          x={x}
          y={y}
          dy={20}
          width={75 + savingsNumberLength * 9}
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
        >
          Savings: {formatCurrency(value)}
        </text>
      </g>
    );
  }
}
