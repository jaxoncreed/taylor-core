var io = require('socket.io-client');


var socket = io(`http://localhost:8010`);

socket.emit('config', {
	type: "titus_socket",
	id: "12345",
	state: {
		distance: 0,
		outlets: [false, false, false, false]
	}
});

socket.on('state', function(state) {
	console.log(state);
});