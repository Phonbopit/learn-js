import { expect } from 'chai';
import { facRecursive, facReduce } from '../src/factorial';

describe('Factorial', () => {
  it('facRecursive(5) should return 120', () => {
    expect(facRecursive(5)).to.equal(120);
  });

  it('facRecursive(3) should return 6', () => {
    expect(facRecursive(3)).to.equal(6);
  });

  it('facReduce(8) should return 40320', () => {
    expect(facReduce(8)).to.equal(40320);
  });
});