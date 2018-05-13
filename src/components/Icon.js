import React, { Component } from 'react';
import colors from '../theme/colors';

import { ReactComponent as help } from '../assets/help.svg';

const TYPES = {
  help,
};

export default class Icon extends Component {
  render() {
    const {
      type,
    } = this.props;

    const TagName = TYPES[type];

    return (
      <TagName style={styles.container} {...this.props} />
    );
  }
};

const styles = {
  container: {
    height: '14px',
    width: '14px',
    padding: '0 2px',
    fill: colors.lightGrey,
  },
};
