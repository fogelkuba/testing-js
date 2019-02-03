const { add } = require('../src/index');
const { assert, test } = require('../lib');

test('The add Fn adds two numbers', () => {
    const actual = add(3, 4)
    const expected = 7;

    assert.equal(actual, expected)
})
