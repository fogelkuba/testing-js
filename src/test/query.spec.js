// const assert = require('assert');
const { parse, stringify} = require('../query');

describe('The query package', () => {
    describe('The parse function', () => {
        it('Should return object of all query params when query string is provided', () => {
            const query = "by=kati-franz&popular=true&category=nodejs";
            const actual = parse(query)
            const expected = {
               by: 'kati-franz',
               popular: 'true',
               category: 'nodejs'
            };
            // assert.deepEqual(actual, expected)
            expect(actual).toEqual(expected)
        })
        it('Should return object: {number: 3} for "?number=3"', () => {
            // assert.deepEqual(parse('?number=3'), {number: '3'})
            expect(parse('?number=3')).toEqual({number: '3'})
        })
    })
    describe('The stringify function', () => {
        it('Should return querystring when proper object is provided', () => {
            const obj = {
                from: 'tommy-lee-jones',
                popular: 'false',
                category: 'vuejs'
            }
            const actual = stringify(obj);
            const expected = 'from=tommy-lee-jones&popular=false&category=vuejs'
            // assert.equal(actual, expected)
            expect(actual).toEqual(expected)
        })
        it('Should remove empty keys from query', () => {
            const obj = {
                from: 'me',
                popular: undefined,
                category: null
            }
            const actual = stringify(obj);
            const expected = 'from=me'
            // assert.equal(actual, expected)
            expect(actual).toEqual(expected)
        })
    })
})