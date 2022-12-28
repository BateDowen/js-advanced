const chooseYourCar = require('./3. Unit Testing');
const expect = require('chai').expect;

describe("Test chooseYourCar object", function() {
    describe("choosingType method, fails", function() {
        it("Should throw an error if the year is less than 1900 and the year is more than 2022", function() {
            expect(()=>chooseYourCar.choosingType('Golf','Black',1899)).to.throw(Error)
            expect(()=>chooseYourCar.choosingType('Golf','Black',2899)).to.throw(Error)
        });
        it("Should throw an error if the value of the string type is different from 'Sedan',", function() {
            expect(()=>chooseYourCar.choosingType('Golf','Black',1899)).to.throw(Error)
        });
     });
     // TODO: …
});

