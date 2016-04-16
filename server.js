import Server from 'socket.io';
import deviceFactory from './core/deviceTypes/deviceFactory'


export default function startServer(deviceStore) {
	const socketPort = 8010;

	const io = new Server().attach(socketPort);
	console.log("Server listening on port " + socketPort);

	io.on('connection', (socket) => {
		console.log("connected!");
	    var device;
	    socket.on('config', (config) => {
	    	console.log('config', config);
	    	device = deviceFactory(config);
	    	device.subscribeHandler((state) => {
	    		socket.emit('state', state);
	    	});
	    	deviceStore.addDevice(device);
	    });

	    socket.on('update', (updatedState) => {
	    	console.log('update', updatedState);
	    	device.setState(updatedState);
	    });
	});

	setInterval(() => {
		deviceStore.devices.forEach((device) => {
			console.info(device.id);
			console.info(JSON.stringify(device.state));
		});
	}, 1000);

}