const rgbToHexColor = require('./6.RGB to Hex');
const expect = require('chai').expect;

describe('RGB to Hex', () => {
    it('Should return undefine if type isnt integer',()=>{
        expect(rgbToHexColor('1','2',[])).to.equal(undefined);
        expect(rgbToHexColor('1',{},{})).to.equal(undefined);
        expect(rgbToHexColor('1',null,3)).to.equal(undefined);
        expect(rgbToHexColor('1',undefined,3)).to.equal(undefined);
        expect(rgbToHexColor('1','2',3)).to.equal(undefined);

    });
    
    it('Should return same color in hexadecimal format as a string ',()=>{
        
        expect(rgbToHexColor(3,3,3)).to.equal('#030303');
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');

    });

    it('Should return undefine if it is out of range ',()=>{
        
        expect(rgbToHexColor(3,3,256)).to.equal(undefined);
        expect(rgbToHexColor(-1,255,255)).to.equal(undefined);
        expect(rgbToHexColor(0,-2,0)).to.equal(undefined);

    });
});
