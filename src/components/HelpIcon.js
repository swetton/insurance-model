import React from 'react';
import {Tooltip} from 'react-lightweight-tooltip';

import colors from '../theme/colors';
import Icon from './Icon';

const CONTENT = {
  initialInvestment: 'This is the amount you plan on investing initially.  If you currently have no savings, indicate $0.',
  pacMonth: 'This is the amount you intend to contribute each month.',
  primaryCiAmount: 'Critical illness insurance coverage typically ranges between $20,000 to $150,000 based on a number of factors.  To find out the precise amount that you and your partner should be covered for, build a financial plan [link], it only takes 3 minutes.',
  secondaryCiAmount: 'This refers to the critical illness coverage of your spouse.  Coverage typically ranges between $20,000 to $150,000 and is based on a number of factors.  To find out the precise amount that you and your partner should be covered for, build a financial plan [link], it only takes 3 minutes.',
  primaryCiCost: 'This is the monthly cost of your critical illness insurance coverage, usually ranging from $15-$70 per month',
  secondaryCiCost: 'This is the monthly cost of your spouses critical illness insurance coverage, usually ranging from $15-$70 per month',
  currentAge: 'Enter your current age here.',
  retirementAge: 'The age at which  you plan to retire.',
  illnessEventAge: 'No one wants a critical illness to happen to them or their spouse. Enter any age here to see what would happen to your investment with and without CI insurance in the event of a critical illness.',
  portfoliosFeesPercentage: 'This is the low percentage of fees we take from your portfolio',
  mutualFundsFeesPercentage: 'This is the percentage of fees a Mutual Fund will take from your portfolio, regardless of whether your investment goes up or down. This may not look like a lot, but you’ll see how it adds up over time',
  rateOfReturnPercentage: 'Depending on your risk tolerance, your investment performance will vary over time.  Typical rate of return is between 2% and 6%. ',
};

export default ({ name }) => (
  <Tooltip
    trigger='click'
    styles={styles.tooltip}
    content={CONTENT[name]}
  >
    <Icon type='help' />
  </Tooltip>
);

const styles = {
  tooltip: {
    tooltip: {
      backgroundColor: colors.white,
      borderRadius: '5px',
      padding: '20px',
      boxShadow: `1px 1px 15px ${colors.shadowBlack}`,
    },
    content: {
      backgroundColor: colors.white,
      color: colors.almostBlack,
      fontSize: '14px',
      display: 'block',
    },
    arrow: {
      display: 'none',
    },
  },
};
