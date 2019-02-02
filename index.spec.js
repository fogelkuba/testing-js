const assert = require('assert');
const { add } = require('./index');


console.log('First Test');

    const actual = add(5, 6)
    const expected = 11;

    assert.equal(actual, expected)

    // this is assertion
    // if (actual !== expected) {
    //     throw new Error(`The add function did not return expected value (${expected}) when adding 5 and 6`)
    // }

    console.log('--> Test passed')

console.log('End of First Test');


console.log('Second Test: Check if error occurs when no arguments are passed');

    assert.throws(() => {
        add()
    })

    console.log('--> Test passed')

console.log('End of Second Test');