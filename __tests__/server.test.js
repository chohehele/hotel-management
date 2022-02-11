'use strict';

const { app } = require('../lib/server.js');
const failTest = 'http://httpstat.us/500';
const request = require('supertest');
const { contentType } = require('express/lib/response');


// Should be able to create an account
describe('Account Creation/Login', () => {

    it('Enter a username and password and create an account.', async () => {
        
       const response = await request(app).post('/signup').send({username: 'test1', password: 'testpw'})
       expect(response.password)
       expect(response.statusCode).toEqual(200);

            
    })

    
       // Should reject an incorrect account.
        it('Enter wrong username and password, fail to log in.', async () =>  {
            const response = await request(app).post('/signin').auth('unexpectedusername', 'wrongpassword') 
            expect(response.statusCode).toEqual(403);    
    
           
           
        })

})


// Should be able to enter guest info in

describe('Guest testing', () => {

    it('Should be able to enter guest information.', async () => {
        let response = await request(app).post('/guest?name=testGuest&timesVisited=2&score=500&leastFFood=testastoast&checkedIn=true&meanNickname=testyfella')
        expect(response.status).toEqual(200)
       
    })
    // Should retrieve guest information 
    // expect('Content-Type', /json/)
    it('Should retrieve guest information', async () => {
        let response = await request(app).get('/guest')
        console.log(response.text.id);
        expect(response.status).toEqual(200)
       
    })

    
    // router.patch('/guest/:id', checkOutGuest);
    it('Be able to check out a guest', async () => {
        let response = await request(app).patch('/guest/1')
        // console.log(JSON.parse(response.text));
        // console.log(JSON.parse(response.text.checkedIn))
        // console.log(response.text.checkedIn)
        expect(response.status).toEqual(200)   
    })

 
})


describe('Room testing', () => {

    // Add A room
    it('Add a room..', async () => {        
        let response = await request(app).post('/room').send({bedSize: 'smol', dirty: false, occupied: false, ready: true})   
        
        expect(response.status).toEqual(200);
        
    })

    // See what rooms router.get('/room', readRooms);
    it('See what rooms are available.', async () => {
        let response = await request(app).get('/room') 
           
        expect(response.status).toEqual(200);
    })

    // Clean a room router.put('/room/:id', cleanRoom);
    it('Clean a room', async () => {
        let response = await request(app).put('/room/1')  
             
        expect(response.status).toEqual(200);
    })

    // Turnover room router.patch('/room/:id', turnOverRoom);
    it('Turnover room', async () => {
        let response = await request(app).patch('/room/1')   
          
        expect(response.status).toEqual(200);
    })


    // Remove a room completely router.delete('/room/:id', removeRoom);
    it('Delete a room completely', async () => {
        let response = await request(app).delete('/room/1')   
            
        expect(response.status).toEqual(200);
    })



})

describe('404 and 500 tests', () => {
    it('404 test', async () => {        
        let response = await request(app).get('/non-extant-route-10001')
        expect(response.status).toEqual(404);
    })


    it('500 test', async () => {        
        let response = await request(failTest).get('/')
        expect(response.status).toEqual(500);
    })
})


describe('Delete guest (saved for last)', () => {
    // router.delete('/guest/:id', removeGuest);
    it('Be able to delete a guest', async () => {
        let response = await request(app).delete('/guest/1')
    
        expect(response.status).toEqual(200)   
    })
})




// Test template for copy/paste.

// describe('What the test do', () => {
//     it('should do this.', async () => {        
//         expect('some response').toEqual('some response');
//     })
// })
