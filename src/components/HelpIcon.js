import React from 'react';
import Popup from 'reactjs-popup';
import Radium from 'radium';

import colors from '../theme/colors';
import Icon from './Icon';

const CONTENT = {
  initialInvestment: 'This is the amount you plan on investing initially.  If you currently have no savings, indicate $0.',
  pacMonth: 'This is the amount you intend to contribute each month.',
  primaryCiAmount: "Critical illness insurance coverage typically ranges between $20,000 to $150,000 based on a number of factors.  To find out the precise amount that you and your partner should be covered for, <a href='https://my.planswell.ca/discovery/ORG-InsCalc' target='_blank'>build a financial plan</a>, it only takes 3 minutes.",
  secondaryCiAmount: "This refers to the critical illness coverage of your spouse.  Coverage typically ranges between $20,000 to $150,000 and is based on a number of factors.  To find out the precise amount that you and your partner should be covered for, <a href='https://my.planswell.ca/discovery/ORG-InsCalc' target='_blank'>build a financial plan</a>, it only takes 3 minutes.",
  primaryCiCost: 'This is the monthly cost of your critical illness insurance coverage, usually ranging from $15-$70 per month',
  secondaryCiCost: 'This is the monthly cost of your spouses critical illness insurance coverage, usually ranging from $15-$70 per month',
  currentAge: 'Enter your current age here.',
  retirementAge: 'The age at which you plan to retire.',
  illnessEventAge: 'No one wants a critical illness to happen to them or their spouse. Enter any age here to see what would happen to your investment with and without CI insurance in the event of a critical illness.',
  portfoliosFeesPercentage: 'This is the low percentage of fees we take from your portfolio',
  mutualFundsFeesPercentage: 'This is the percentage of fees a Mutual Fund will take from your portfolio, regardless of whether your investment goes up or down. This may not look like a lot, but you’ll see how it adds up over time',
  rateOfReturnPercentage: 'Depending on your risk tolerance, your investment performance will vary over time.  Typical rate of return is between 2% and 6%. ',
};

const HelpIcon = ({ name, label, small, tooltipUp }) => (
  <Popup
    key={small}
    contentStyle={styles.modal.content}
    trigger={<Icon type='help' />}
    overlayStyle={styles.modal.overlay}
    on={small ? 'click' : 'hover'}
    modal={small}
    position={`right ${tooltipUp ? 'bottom' : 'top'}`}
    arrow={false}
  >
    {close => (
      <div>
        {small && <div style={styles.modal.closeContainer}>
          <Icon type='close' onClick={close} />
        </div>}
        {small && <div style={styles.modal.headline}>
          {label}
        </div>}
        <div
          style={[styles.modal.description, small && styles.small.modal.description]}
          dangerouslySetInnerHTML={{ __html: CONTENT[name] }}
        />
      </div>
    )}
  </Popup>
);

export default Radium(HelpIcon);

const styles = {
  modal: {
    content: {
      border: 0,
      borderRadius: '5px',
      textAlign: 'left',
      fontSize: '14px',
      width: 'calc(100% - 40px)',
      maxWidth: '300px',
      boxShadow: `1px 1px 15px ${colors.shadowBlack}`,
    },
    headline: {
      fontWeight: 600,
      fontSize: '24px',
      padding: '20px 20px 10px',
      textAlign: 'center',
    },
    description: {
      padding: '20px',
    },
    closeContainer: {
      textAlign: 'right',
      padding: '5px',
    },
  },
  small: {
    modal: {
      description: {
        padding: '0 20px 50px',
        color: colors.evenDarkerGrey,
      },
    },
  },
};
