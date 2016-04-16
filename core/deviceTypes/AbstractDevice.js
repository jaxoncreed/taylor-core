
export default class AbstractDevice {
	constructor(id) {
		this.id = id;
		this.state = {};
		this.handlers = [];
		this.tags = [];
		this.deviceStore = null;
	}

	setState(newState) {
		Object.assign(this.state, newState);
		this.handlers.forEach((handler) => {
			handler(newState, deviceStore);
		});
	}

	subscribeHandler(handler) {
		this.handlers.push(handler);
	}

	setDeviceStore(parent) {
		this.deviceStore = parent;
	}



}