var myCubedVar;

module.exports = {
    toCube(inpNumber) {
        var numberReturned = 0;
        if (typeof inpNumber === "number") {
            numberReturned = Math.pow(inpNumber, 3);
            return numberReturned;
        }
    },

    toNumber(inpNumber) {
        var numberReturned;
        if (typeof inpNumber === "string") {
            numberReturned = Math.pow(Number(inpNumber), 3);
            return numberReturned;
        }
    },

    toNumber(inpNumber) {
        var num = NaN; // Not A Number
        if (typeof inpNumber === "number") {
            num = inpNumber;
        } else if (typeof inpNumber === "string" && typeof Number(inpNumber) === "number") {
            num = Number(inpNumber);
        }
        return num;
    }
}