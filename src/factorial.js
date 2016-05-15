'use strict';

const recursive = (value) => {
  if (value === 1) return value;
  return value * recursive(value - 1);
}

const reduce = (value) => {
  let arr = [];
  for (let i = 0; i < value; i++) {
    arr.push(value - i);
  }

  return arr.reduce((prev, curr) => {
    return prev * curr;
  });
}

module.exports = {
  facRecursive: recursive,
  facReduce: reduce
}