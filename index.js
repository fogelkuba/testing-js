function add (num1, num2) {

    if (!num1 && !num2) {
        throw new Error('Numbers are required for testing')
    }

    return num1 + num2; //should work correctly
    // return num1 - num2;    // will not work
}


module.exports = {
    add
}

// console.log(add(2,3.5))