function add (number1, number2) {
    // return number1 + number2; //should work correctly
    return number1 - number2;    // will not work
}


module.exports = {
    add
}

console.log(add(2,3.5))