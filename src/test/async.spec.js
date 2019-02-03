const assert = require('assert');
const { findUserById, findUserByEmail } = require('./../async');

describe('The async package', function () {
    describe('The findUserById function test', () => {
        it('Should return user by id', function (done) {
            const result = findUserById(1).then(result => {
                assert.equal(result.user.name, 'bahdcoder')
                done();
            });
        })
        it('Should return "Miss Myers" found by id: 2 | ASYNC', async () => {
            const result = await findUserById(2);
            assert.equal(result.user.name, 'Miss Myers')
        })
        it('Should throw err when user was not found by id', () => {
            const id = 123123;
            return findUserById(id).catch(error => {
                assert.equal(error.message, `User with id: ${id} was not found.`)
            })
        });
    })
    describe('The findUserByEmail function test', () => {
        it('Should return user by email', function () {
            return findUserByEmail('emily@gates.co.za').then(result => {
                assert.equal(result.user.id, 3)
                assert.equal(result.user.email, 'emily@gates.co.za')
            });
        });
        it('Should throw err when user was not found by email', () => {
            const email = 'johny@test.co.za';
            return findUserByEmail(email).catch(error => {
                assert.equal(error.message, `User with email: ${email} was not found.`)
            })
        });
        // it('Should throw err when user was not found by email- ASYNC', async () => {
        //     try {
        //         await findUserByEmail('Dupa@test.gmail.com');
        //         assert.fail('EXPECTED_ERROR')

        //     } catch (err) {
        //         if (err.message === 'EXPECTED_ERROR') {
        //             throw err
        //         }
        //         assert.equal(err.message, `User with email: Dupa@test.gmail.com was not found.`)
        //     }
        // });
    })
})