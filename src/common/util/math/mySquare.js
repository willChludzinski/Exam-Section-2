var mySquareVar;

module.exports = {
    toSquare(inpNumber) {
        var numberReturned;
        if (typeof inpNumber === "number") {
            numberReturned = Math.pow(inpNumber, 2);
            return numberReturned;
        }
    }
}