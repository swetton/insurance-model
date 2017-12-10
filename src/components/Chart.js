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
} from 'recharts';

import FinalChartLabel from './FinalChartLabel';
import colors from '../theme/colors';

export default class Chart extends Component {
  render() {
    const {
      data,
    } = this.props;

    return (
      <div style={styles.container}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 10, bottom: 10, left: 20 }}>
             <XAxis
               name='Age'
               dataKey='age'
               minTickGap={30}
               padding={{ left: 30, right: 80 }}
               interval='preserveStartEnd'
             />
             <YAxis
               tickFormatter={(val) => numeral(val).format('$0,0')}
             />
             <CartesianGrid strokeDasharray='3 3'/>
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
               stroke='#2F5DEA'
               label={<FinalChartLabel data={data} />}
             />
             <Line
               type='monotone'
               name='Mutual Funds'
               dataKey='mutualFundsReturn'
               stroke='#E75854'
               label={<FinalChartLabel data={data} />}
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
    width: '95%',
    maxWidth: '900px',
    height: '55vh',
    margin: '0 auto',
    padding: '20px',
    border: `1px solid ${colors.grey}`,
  },
};
