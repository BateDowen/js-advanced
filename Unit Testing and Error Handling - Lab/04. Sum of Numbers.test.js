const { it } = require('mocha');
const sum = require('./04. Sum of Numbers');
const expect = require('chai').expect;

describe('Sum of numbers', ()=>{
    it('Should return sum to be equal to sum of arr',()=>{
        let numbers = [1,2,3,4,5];
        let expectSum = 15;
        let actualSum = sum(numbers);
        expect(actualSum).to.equal(expectSum);
    });

    it('Should work with negarive num', ()=>{
        let numbers = [1,2,3,4,-5];
        let expectSum = 5;
        let actualSum = sum(numbers);
        expect(actualSum).to.equal(expectSum);
    });

    it('Should work with num as a srting', ()=>{
        let numbers = [1,2,3,4,"-5"];
        let expectSum = 5;
        let actualSum = sum(numbers);
        expect(actualSum).to.equal(expectSum);
    });
});

