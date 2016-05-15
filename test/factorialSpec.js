import { expect } from 'chai';
import { facRecursive } from '../src/factorial';

describe('Factorial', () => {
  it('facRecursive(5) should return 120', () => {
    expect(facRecursive(5)).to.equal(120);
  });
});