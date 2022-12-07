let lookupChar = require('./3.Char Lookup');
let expect = require('chai').expect;

describe('LookupChar tests', () => {
    it('Should return undefined if type is not string', () => {
        expect(lookupChar(1,1)).to.equal(undefined);
        expect(lookupChar([],1)).to.equal(undefined);
        expect(lookupChar({},1)).to.equal(undefined);
        expect(lookupChar(null,1)).to.equal(undefined);
        expect(lookupChar(undefined,1)).to.equal(undefined);
        expect(lookupChar(function (){},1)).to.equal(undefined);
    });

    it('Should return incorect if sring is empty', () => {
        expect(lookupChar('',0)).to.equal('Incorrect index');
    });
    
    it('Should return undefined if idex is not idex', () => {
        expect(lookupChar('Look','L')).to.equal(undefined);
    });

    it('Should return undefined if idex is decimal', () => {
        expect(lookupChar('Look',10.5)).to.equal(undefined);
    });

    it('Should return incorect if idex is bigger than lenght', () => {
        expect(lookupChar('Look',10)).to.equal('Incorrect index');
    });

    it('Should return incorect if idex is negative than lenght', () => {
        expect(lookupChar('Look',-10)).to.equal('Incorrect index');
    });
    //positive return
    it('Should return L', () => {
        expect(lookupChar('Look',0)).to.equal('L');
    });




});