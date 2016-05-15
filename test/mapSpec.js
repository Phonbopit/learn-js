import { expect } from 'chai';

describe('Playground', () => {
  describe('Map & Reduce', () => {
    it('multiply all items in array with map()', () => {
      let initial = [1, 2, 3, 4, 5, 6];
      let result = [2, 4, 6, 8, 10, 12];

      let expected = initial.map(i => i * 2);

      expect(expected).to.eql(result);
    });

    it('multiply all nested array with reduce()', () => {
      let initial = [[1, 2, 3], [4, 5, 6]];
      let result = [2, 4, 6, 8, 10, 12];

      let expected = initial.reduce((prev, curr) => {
        return prev.concat(curr).map(i => i * 2);
      });

      expect(expected).to.eql(result);
    })
  });
});