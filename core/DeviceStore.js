
export default class DeviceStore {
	constructor() {
		this.devices = [];
	}

	addDevice(givenDevice) {
		for (var i = 0; i < this.devices.length; i++) {
			if (givenDevice.id === this.devices[i].id) {
				return this.devices[i];
			}
		}
		this.devices.push(givenDevice);
		givenDevice.setDeviceStore(this);
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
}