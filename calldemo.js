
var NodeEmitter = require('events');

var emitter = new NodeEmitter();

emitter.on('greet', function() {
    console.log('Hello!');
});

emitter.on('greet', function() {
    console.log('Holla!');
});

emitter.on('greet', function() {
    console.log('Kamusta!');
});

emitter.emit('greet');