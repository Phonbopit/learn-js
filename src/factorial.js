'use strict';

const recursive = (value) => {
  if (value === 1) return value;
  return value * recursive(value - 1);
}

const reduce = (value) => {
  return value;
}

module.exports = {
  facRecursive: recursive,
  facReduce: reduce
}