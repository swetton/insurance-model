import _ from 'lodash';
import numeral from 'numeral';

export default (object) => {
  return _.reduce(object, (result, value, key) => {
    result[key] = numeral(value).value();
    return result;
  }, {});
};
