import { expect } from 'chai';
import { facRecursive, facReduce } from '../src/factorial';

describe('Factorial', () => {
  it('facRecursive(5) should return 120', () => {
    expect(facRecursive(5)).to.equal(120);
  });

  it('facRecursive(3) should return 6', () => {
    expect(facRecursive(3)).to.equal(6);
  });

  it('facReduce(5) should return 120', () => {
    expect(facReduce(5)).to.equal(120);
  });
});