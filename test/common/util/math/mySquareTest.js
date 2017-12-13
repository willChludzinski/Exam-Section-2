const assert = require('chai').assert;
const mySquare = require('../../../../src/common/util/math/mySquare.js');
const inpNumber = 2;
const str1 = 4;

describe('mySquare', function() {
    describe('toSquare', function() {
        //this is an it case for taking in a number and asserting it returns a num
        it('toSquare(' + inpNumber + ') should return Square value of "' + str1 + '"', function() {
            let result = mySquare.toSquare(inpNumber);
            assert.equal(result, str1);
        });
        //this is an it taking a string and asserting it returns a number
        it('toSquare("' + inpNumber + '") should return Square value of "' + str1 + '"', function() {
            let result = mySquare.toSquare(inpNumber);
            assert.equal(result, str1);
        });
        //this is an it returning a number
        it('toSquare should return type number', function() {
            let result = mySquare.toSquare(inpNumber);
            assert.typeOf(result, 'number');
        });
    });
});