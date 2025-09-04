const { expect } = require('chai');
const math = require('../lib/math');

describe('Math Library', () => {
  it('should add numbers', () => {
    expect(math.add(2, 3)).to.equal(5);
  });

  it('should subtract numbers', () => {
    expect(math.subtract(5, 3)).to.equal(2);
  });

  it('should multiply numbers', () => {
    expect(math.multiply(2, 3)).to.equal(6);
  });

  it('should divide numbers', () => {
    expect(math.divide(6, 3)).to.equal(2);
  });

  it('should throw on division by zero', () => {
    expect(() => math.divide(1, 0)).to.throw('Division by zero');
  });
});
