const assert = require('chai').assert;
const mySquare = require('../../../../src/common/util/math/mySquare.js');
const myCube = require('../../../../src/common/util/math/myCube.js');
const myPower = require('../../../../src/common/util/math/myPowers.js')

const inpNumber = 2;
const str1 = 4;
const num1 = 3;
const str2 = 27;

describe('myPowersTest', function() {
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
});