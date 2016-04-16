import Server from 'socket.io';
import deviceFactory from './core/deviceTypes/deviceFactory'





// Test
import express from 'express'
var app = express();

export default function startServer(deviceStore) {
	const socketPort = 8010;

	const io = new Server().attach(socketPort);
	console.log("Server listening on port " + socketPort);

	io.on('connection', (socket) => {
	    var device;
	    socket.on('config', (config) => {
	    	device = deviceFactory(config);
	    	device.subscribeHandler((state) => {
	    		socket.emit('state', state);
	    	});
	    	deviceStore.addDevice(device);
	    });

	    socket.on('update', (updatedState) => {
	    	device.setState(updatedState);
	    });
	});




	// Test eclipse server:
	app.get('/', (req, res) => {
		var dev = deviceStore.getDeviceById('12345');
		console.log(dev);
		res.send('yo!');
	});
	app.listen(9000);

}