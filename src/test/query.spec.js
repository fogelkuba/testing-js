const assert = require('assert');
const { parse, stringify} = require('../query');

describe('The query package', () => {
    describe('The parse function test', () => {
        it('Should return object of all query params when query string is provided', () => {
            const query = "?by=kati-franz&popular=true&category=nodejs";
            const actual = parse(query)
            const expected = {
               by: 'kati-franz',
               popular: 'true',
               category: 'nodejs'
            };
            assert.deepEqual(actual, expected)
        })
    })
    describe('The stringify function test', () => {
        it('Should return querystring when proper object is provided', () => {
            const obj = {
                from: 'tommy-lee-jones',
                popular: 'false',
                category: 'vuejs'
            }
            const actual = stringify(obj);
            const expected = 'from=tommy-lee-jones&popular=false&category=vuejs'
            assert.equal(actual, expected)
        }) 
    })
})