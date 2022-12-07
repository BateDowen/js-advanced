const isOddOrEven = require('./2.Even or Odd');
const { expect } = require('chai');

describe('Even or Odd', ()=>{
    it('Should return undefine if isnt string', () => {
        expect(isOddOrEven(34)).to.equal(undefined);
    });

    it('Should return even if string length is even', () => {
        expect(isOddOrEven('34')).to.equal('even');
        expect(isOddOrEven('even')).to.equal('even');
    });

    it('Should return odd if string length is odd', () => {
        expect(isOddOrEven('333')).to.equal('odd');
        expect(isOddOrEven('odd')).to.equal('odd');
    });
});
