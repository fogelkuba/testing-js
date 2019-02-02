const assert = require('assert');
const { findUserById, findUserByEmail } = require('./../async');

describe('The Async function test', function () {
    describe('The findUserById function test', () => {
        it('Should return user by id', function (done) {
            const result = findUserById(1).then(result => {
                assert.equal(result.user.name, 'bahdcoder')
                done();
            });
            
        })
    })
    describe('The findUserByEmial function test', () => {
        it('Should return user by email', function () {
            return findUserById(3).then(result => {
                assert.equal(result.user.email, 'emily@gates.co.za')
            });
        })
    })
})