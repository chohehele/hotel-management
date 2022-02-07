'use strict';

const server = require('../lib/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

// Test template for copy/paste.

describe('What the test do', () => {

    it('should do this.', async () => {
        

       
        expect('some response').toEqual('some response');
    })
})

// Should be able to create an account

// Should be able to log into that account

// Should be able to enter guest info in

// Should fail when guest info is incomplete

// Should be able to make a reservation for a future date

// Room will be unavailable for future date

// Should prioritize guests based on past stays