import React, { Component } from 'react';
import numeral from 'numeral';
import _ from 'lodash';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';

import FinalChartLabel from './FinalChartLabel';
import FinalSavingsLabel from './FinalSavingsLabel';
import colors from '../theme/colors';
import parseNumbersObject from '../helpers/parseNumbersObject';
import Return from '../calculations/Return';

const renderDot = (props) => {
  const {
    payload: {
      age
    }
  } = props;

  if (age % 5 > 0) return false;

  return <circle {...props} />
};

class Chart extends Component {
  ages() {
    return _.range(this.props.inputs.currentAge, this.props.inputs.retirementAge + 1);
  }

  inputsValid() {
    const {
      currentAge,
      retirementAge,
    } = this.props.inputs;

    if (!currentAge) return false;
    if (!retirementAge) return false;
    if (currentAge > retirementAge) return false;

    return true;
  }

  result() {
    if (!this.inputsValid()) return [];

    return _.map(this.ages(), (age) => {
      const portfoliosReturn = _.round(new Return(this.props.inputs,
        'portfoliosFeesPercentage').calculate(age));
      const mutualFundsReturn = _.round(new Return(this.props.inputs,
        'mutualFundsFeesPercentage').calculate(age));

      return ({
        age,
        portfoliosReturn,
        mutualFundsReturn,
        difference: portfoliosReturn - mutualFundsReturn,
      });
    });
  }
  render() {
    const data = this.result();
    const {
      medium,
    } = this.props;

    return (
      <div
        style={{
          ...styles.container,
          ...(medium ? styles.medium.container : {}),
        }}
      >
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
             <XAxis
               name='Age'
               dataKey='age'
               minTickGap={30}
               padding={{ left: 30, right: 80 }}
               interval='preserveStartEnd'
               tickLine={false}
               tick={styles.tick.regular}
             />
             <YAxis
               axisLine={{ stroke: colors.haze }}
               tickFormatter={(val) => numeral(val).format('$0,0')}
               tickLine={false}
               tick={{ ...styles.tick.regular, ...styles.tick.age }}
             />
             <CartesianGrid stroke={colors.haze} vertical={false} />
             <Tooltip
               formatter={(val) => numeral(val).format('$0,0')}
               wrapperStyle={styles.tooltip.container}
             />
             <Legend
               margin={{ top: 20 }}
               iconType='circle'
               iconSize={10}
               wrapperStyle={styles.legend.container}
             />
             <Line
               type='monotone'
               name='Our Plan'
               dataKey='portfoliosReturn'
               stroke={colors.green}
               strokeWidth={2}
               dot={renderDot}
               label={<FinalChartLabel data={data} backgroundColor={colors.green} />}
             />
             <Line
               type='monotone'
               name='Mutual Funds'
               dataKey='mutualFundsReturn'
               stroke={colors.red}
               strokeWidth={2}
               dot={renderDot}
               label={<FinalChartLabel data={data} backgroundColor={colors.red} />}
             />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default connect(state => ({
  inputs: parseNumbersObject(getFormValues('mainForm')(state)),
}))(Chart);

const styles = {
  container: {
    height: 'calc(80px * 6 + 2px * 5 - 40px - 40px - 2px)',
    backgroundColor: colors.white,
    padding: '20px',
    marginBottom: '2px',
  },
  tick: {
    regular: {
      fill: colors.darkerGrey,
      fontSize: '12px',
    },
    age: {
      fill: colors.evenDarkerGrey,
    },
  },
  tooltip: {
    container: {
      border: 0,
      boxShadow: `1px 1px 15px ${colors.shadowBlack}`,
      borderRadius: '5px',
    },
  },
  legend: {
    container: {
      fontSize: '12px',
      color: colors.almostBlack,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '10px',
    },
  },
  medium: {
    container: {
      height: 'calc(80px * 6 + 2px * 5 - 40px - 60px - 2px)',
    },
  },
};
