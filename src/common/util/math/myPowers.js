const squareNum = require('./mySquare');
const cubeNum = require('./myCube');


module.exports = {
    square(inpNumber) {
        return squareNum.toSquare(inpNumber);
    },

    cube(inpNumber) {
        return cubeNum.toCube(inpNumber);
    },

}