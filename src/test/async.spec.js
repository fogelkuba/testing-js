// const assert = require('assert');
const { findUserById, findUserByEmail } = require('./../async');

describe('The async package', function () {
    describe('The findUserById function test', () => {
        it('Should return user by id', function (done) {
            const result = findUserById(1).then(result => {
                // assert.equal(result.user.name, 'bahdcoder')
                expect(result.user.name).toBe('bahdcoder')
                done();
            });
        })
        it('Should return "Miss Myers" found by id: 2 | ASYNC', async () => {
            const result = await findUserById(2);
            // assert.equal(result.user.name, 'Miss Myers')
            expect(result.user.name).toBe('Miss Myers')
        })
        it('Should throw err when user was not found by id', () => {
            const id = 123123;
            return findUserById(id).catch(error => {
                // assert.equal(error.message, `User with id: ${id} was not found.`)
                expect(error.message).toBe(`User with id: ${id} was not found.`)
            })
        });
    })
    describe('The findUserByEmail function test', () => {
        it('Should return user by email', function () {
            return findUserByEmail('emily@gates.co.za').then(result => {
                // assert.equal(result.user.id, 3)
                // assert.equal(result.user.email, 'emily@gates.co.za')
                expect(result.user.id).toBe(3)
                expect(result.user.email).toBe('emily@gates.co.za')
            });
        });
        it('Should throw err when user was not found by email', () => {
            const email = 'johny@test.co.za';
            return findUserByEmail(email).catch(error => {
                // assert.equal(error.message, `User with email: ${email} was not found.`)
                expect(error.message).toBe(`User with email: ${email} was not found.`)
            })
        });
    })
})