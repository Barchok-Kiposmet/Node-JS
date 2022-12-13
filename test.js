// event driven programming based on events.

const { EventEmitter}   = require('events');

const eventEmitter = new EventEmitter ();

eventEmitter.on('lunch', () => {

    console.log('Yum 🥩');
});

eventEmitter.emit('lunch')
eventEmitter.emit('lunch')


// File system


const { readFile, readFileSync } = require ('fs');

readFile('./hello.txt', 'utf-8', (err, txt) => {
    console.log(txt); //call back function
});


console.log('do this ASAP');