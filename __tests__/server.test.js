'use strict';

const server = require('../lib/server.js');
const request = require('supertest');



const express = require('express');
const router = require('../lib/routes/login.js');
const app = express();
app.use(express.json());

jest.mock('../lib/routes/login.js');
const userService = require('../lib/routes/login.js');

// basic proof of life test, should hit home route
describe('Should hit home route', () => {
    it('Going to /', (done) => {
        request(server)
        .get('/')
        .expect(200, done)
    })
})

const loginInfo = {
    username: 'test1',
    password: 'foo'
}


// Should be able to create an account
describe('Should be able to create an account', () => {

    it('Enter a username and password and create an account.', async () => {
        
       const response = await request(app)
       .post('/signup')
       .send(loginInfo)
       
        expect(response.statusCode).toEqual(200);
    })
    // Should be able to create an account #2
    it('Enter a username and password and create an account.', function(done) {        
        request(app)
        .post('/signup')
        .auth('username', 'password')  
        .expect(200,done)
          
        

    })

})



// Should be able to log into that account
describe('Should be able to log into that account', () => {

    it('Enter username and password, log in.', function(done)  {
        request(app)
        .post('/signin')
        .auth('username', 'password')
        
        
        .expect(200, done)
             

       
       
    })
})

let testGuest = {
    name: 'testGuest',
    score: '665',
    meanNickName: 'testy',
    leastFFood: 'testas toast',
    checkedIn: true,
    roomAssigned: 666
}

// Should be able to enter guest info in
describe('Should be able to enter guest info in', () => {

    it('Should be able to enter guest information.', function(done) {
        request(app)
        .post('/guest')
        .send(testGuest)
        
        
        .expect(200, done)
       
    })
})

// Should retrieve guest information
describe('Should retrieve guest information', () => {

    it('should do this.', function(done) {
        request(app)
        .get('/guest')
        .expect('Content-Type', /json/)
        .expect(200, done)

       
    })
})


// Should be able to make a reservation for a future date
describe('What the test do', () => {

    it('should do this.', async () => {
        

       
        expect('some response').toEqual('some response');
    })
})

// Room will be unavailable for future date
describe('What the test do', () => {

    it('should do this.', async () => {
        

       
        expect('some response').toEqual('some response');
    })
})

// Should prioritize guests based on past stays
describe('What the test do', () => {

    it('should do this.', async () => {
        

       
        expect('some response').toEqual('some response');
    })
})



// Test template for copy/paste.

// describe('What the test do', () => {
//     it('should do this.', async () => {        
//         expect('some response').toEqual('some response');
//     })
// })
