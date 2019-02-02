const assert = {
    equal(actual, expected) {
        if (actual !== expected) {
            throw new Error(`Expected ${expected}, to be equal ${actual}.`)
        }
    },
    ok(actual) {
        if (!actual && actual !== 0) {
            throw new Error(`Provided param ${actual} in undefined.`)
        }
    }
}

const test = function(test, callback) {
    try {
        callback();
        console.log(`Passed: ${test}`);
    }
    catch (error) {
        console.error(`Failed: ${test}`);
        throw error
    }
}

module.exports = {
    assert, 
    test
}