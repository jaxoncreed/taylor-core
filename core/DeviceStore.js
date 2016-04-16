
export default class DeviceStore {
	constructor() {
		this.devices = [];
		this.identities = {};
	}

	addDevice(givenDevice) {
		for (var i = 0; i < this.devices.length; i++) {
			if (givenDevice.id === this.devices[i].id) {
				return this.devices[i];
			}
		}
		this.devices.push(givenDevice);
		givenDevice.setDeviceStore(this);
		Object.assign(this.identities, givenDevice.getIdentities);
		return givenDevice;
	}

	getDeviceById(id) {
		for (var i = 0; i < this.devices.length; i++) {
			if (this.devices[i].id === id) {
				return this.devices[i];
			}
		}
		return null;
	}

	getDevicesByTags(tags) {
		var matches = [];
		this.devices.forEach((device) => {
			var added = false;
			tags.forEach((tag) => {
				if (device.tags.includes(tag) && !added) {
					mateches.push(device)
					added = true;
				}
			});
		});
		return matches;
	}

	getIdentityLocation(name) {
		const identityLocation = this.identities[name];
		if (!identityLocation) {
			// error not found
		}
		const device = this.getDeviceById(identityLocation[0]);
		var data = identityLocation.state;
		for (var i = 1; i < identityLocation.length; i++) {
			data = data[identityLocation[i]];
		}
		return data;
	}

	setIdentityLocation(name, data) {
		const identityLocation = this.identities[name];
		if (!identityLocation) {
			// error not found
		}
		const device = this.getDeviceById(identityLocation[0]);
		var update = Object.assign({}, device.state);
		set(update, identityLocation.splice(1, identityLocation.length), data);
		device.setState(update);
	}
}