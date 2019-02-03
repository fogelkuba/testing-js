// const assert = require('assert');
const { add } = require('./../index');


describe('The add() package', function () {
    it('Should return 11 for arguments 5 and 6', function () {
        const actual = add(5, 6)
        const expected = 11;

        // assert.equal(actual, expected)
        expect(actual).toBe(expected)
    })

    it('Should throw Err if no arguments are provided', function () {
        // assert.throws(() => {
        //     add()
        // })
        expect(() => {
            add()
        }).toThrow()
    })
})


//     // console.log('First Test');

//     const actual = add(5, 6)
//     const expected = 11;

//     assert.equal(actual, expected)

//     // this is assertion
//     // if (actual !== expected) {
//     //     throw new Error(`The add function did not return expected value (${expected}) when adding 5 and 6`)
//     // }

//     // console.log('--> Test passed')

//     // console.log('End of First Test');


//     // console.log('Second Test: Check if error occurs when no arguments are passed');
//     // if throws error
//     assert.throws(() => {
//         add()
//     })
//     // if doesnt throw error
//     // assert.doesNotThrow(() => {
//     //     add()
//     // })

//     // console.log('--> Test passed')

//     // console.log('End of Second Test');
// 