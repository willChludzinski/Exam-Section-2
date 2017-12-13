const assert = require('chai').assert;
const myCube = require('../../../../src/common/util/math/myCube.js');

const num1 = 3;
const str1 = num1.toString();
describe('myCube', function() {
    describe('toCube', function() {
        //this is an it case for taking in a number and asserting it returns a num
        it('toCube(' + num1 + ') should return Cube value of "' + Math.pow(num1, 3) + '"', function() {
            let result = myCube.toCube(num1);
            assert.equal(result, num1 * num1 * num1);
        });
        //this is an it taking a string and asserting it returns a number

        it('toCube("' + num1 + '") should return Cube value of "' + Math.pow(num1, 3) + '"', function() {
            let result = myCube.toCube(num1);
            assert.equal(result, num1 * num1 * num1);
        });
        //this is an it returning a number
        it('toCube should return type number', function() {
            let result = myCube.toCube(num1);
            assert.typeOf(result, 'number');
        });
    });
});