import _ from 'lodash';

export default (data, index) => {
  return _.findLastIndex(data) === index;
};
