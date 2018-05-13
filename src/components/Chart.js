import React, { Component } from 'react';
import numeral from 'numeral';
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

import FinalChartLabel from './FinalChartLabel';
import FinalSavingsLabel from './FinalSavingsLabel';
import colors from '../theme/colors';

const renderDot = (props) => {
  const {
    payload: {
      age
    }
  } = props;

  if (age % 5 > 0) return false;

  return <circle {...props} />
};

export default class Chart extends Component {
  render() {
    const {
      data,
    } = this.props;

    return (
      <div style={styles.container}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 35, bottom: 10, left: 50 }}>
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
             />
             <Legend
               margin={{ top: 20 }}
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

const styles = {
  container: {
    backgroundColor: colors.white,
    width: '100%',
    // maxWidth: '900px',
    // height: '55vh',
    // margin: '0 auto',
    padding: '20px',
    // border: `1px solid ${colors.grey}`,
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
};
