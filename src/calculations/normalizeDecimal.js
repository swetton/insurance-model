export default (value) => {
  if (!value || !value.length || value[value.length - 1] === '.') {
    return value;
  } else {
    return parseFloat(value);
  }
}
