const recursive = (value) => {
  if (value === 1) return value;
  return value * recursive(value - 1);
}

module.exports = {
  facRecursive: recursive
}