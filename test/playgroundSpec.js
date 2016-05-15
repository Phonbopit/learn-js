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

  describe('Regex', () => {
    it('check valid hexademical format', () => {

      let pattern = /^[\da-f]+$/;

      expect('123abc').to.match(pattern);
      expect('123zxc').to.not.match(pattern);
      expect('123fff').to.match(pattern);

      // expect(pattern.test('123zxc')).to.equal(false);
      // expect(pattern.test('123abc')).to.equal(true);
      // expect(pattern.test('123fff')).to.equal(true);
    });

    it('check valid color hex code format', () => {
      let pattern = /^[\da-f]{3}$|^[\da-f]{6}$/;

      expect('a44').to.match(pattern);
      expect('f364d').to.not.match(pattern);
      expect('f0f0f0').to.match(pattern);
    });
  });
});