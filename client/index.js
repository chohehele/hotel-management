'use strict';

const socketio = require('socket.io-client');
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'http://localhost:3000';

const readline = require('readline');
const { workerData } = require('worker_threads');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const hotelConnect = socketio.connect('http://localhost:3000');

let username, password;

const signin = {
  username: username,
  password: password
}

const signup = {
  username: username,
  password: password
}

const mainMenu = () => {

  console.log(
    'Welcome to H-otel Management Software V0.0.1\n' +
    'Main Menu:\n' +
    '1: Login\n' +
    '2: Create Account\n' +
    '3: Exit'
    );
  
  
  rl.question('Where would you like to go?\n', (input) => {
    switch (input) {
      case '1' : loginRequest(); break;
      case '2' : createAccount(); break;
      case '3': process.exit(); 
  
  
    }  
  })
}

mainMenu();
      


const loginRequest = () => {
  
    rl.question('Username:', (username) => {   
      rl.question('Password:', (password) => {
        console.log('Adding username to payload.');
          signin.username = username;
          signin.password = password;
          console.log(signin);
          console.log('Adding password to payload. Sending login information.');
          hotelConnect.emit('login', signin);
          
          rl.close();
      });
    })
  
}



const createAccount = () => {  
    rl.question('Create an account? Y/N\n', (input)=> {
      if (input.toUpperCase() === 'Y' || input.toUpperCase() === 'YES') {

      console.log('Account creation activated.')
      accountCreate();

        
      } else {
        hotelConnect.emit('login');
      }
      rl.close();
    })
  
}  

const accountCreate = () => {
  rl.question('Username:', (username) => {   
    rl.question('Password:', (password) => {
      console.log('Adding username to payload.');
        signup.username = username;
        signup.password = password;
        console.log(signup);
        console.log('Adding password to payload. Sending login information.');
        hotelConnect.emit('createAccount', signup);
        
        rl.close();
    })
  })



}

hotelConnect.on('connect', (payload) => {
  
  //payload = login;
  //hotelConnect.emit('login', payload);
})