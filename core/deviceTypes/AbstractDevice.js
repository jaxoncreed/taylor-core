
export default class AbstractDevice {
	constructor(id) {
		this.id = id;
		this.state = {};
		this.handlers = [];
	}

	setState(newState) {
		Object.assign(this.state, newState);
		this.handlers.forEach((handler) =>
			hander(newState);
		});
	}

	subscribeHandler(handler) {
		this.handlers.push(handler);
	} 

}