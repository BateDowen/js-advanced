// const { it } = require('mocha');
let isSymmetric = require('./5.Check for Symmetry');
let expect = require('chai').expect;

describe('Check for symmetric', () => {
    it('Should return false for any input that isnt the correct type', ()=>{
        
        expect(isSymmetric(23)).to.equal(false);
        expect(isSymmetric('Hello')).to.equal(false);
        expect(isSymmetric([1,2,3,4])).to.equal(false);
        expect(isSymmetric({})).to.equal(false);
        expect(isSymmetric(undefined)).to.equal(false);
        expect(isSymmetric(null)).to.equal(false);

    });
    it('Should return true for symmetric arr', ()=>{
        
        expect(isSymmetric([1,2,3,2,1])).to.equal(true);
        expect(isSymmetric(['a',1,2,2,1,'a'])).to.equal(true);
    
    });


});


