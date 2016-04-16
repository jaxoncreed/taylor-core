import Server from 'socket.io';
import deviceFactory from './core/deviceTypes/deviceFactory'

export default function startServer(store) {
	const socketPort = 8010;

	const io = new Server().attach(socketPort);
	console.log("Server listening on port " + socketPort);

	io.on('connection', (socket) => {
	    var device;
	    socket.on('config', (config) =>
	    	device = deviceFactory(config);
	    	device.subscribeHandler((state) =>
	    		socket.emit('state', state);
	    	);
	    );

	    socket.on('update', (updatedState) => {
	    	device.setState(updatedState);
	    });
	});
}