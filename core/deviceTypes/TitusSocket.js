import AbstractDevice from './AbstractDevice';

export default class TitusSocket extends AbstractDevice {
	constructor(id, initialState) {
		super(id);
		this.state = initialState;
	}

	getIdentities() {
		return {
			"socket 1": [id, "outlets", 0],
			"socket one": [id, "outlets", 0],
			"outlet 1": [id, "outlets", 0],
			"outlet one": [id, "outlets", 0],

			"socket 2": [id, "outlets", 1],
			"socket two": [id, "outlets", 1],
			"outlet 2": [id, "outlets", 1],
			"outlet two": [id, "outlets", 1],

			"socket 3": [id, "outlets", 2],
			"socket three": [id, "outlets", 2],
			"outlet 3": [id, "outlets", 2],
			"outlet three": [id, "outlets", 2],

			"socket 4": [id, "outlets", 3],
			"socket four": [id, "outlets", 3],
			"outlet 4": [id, "outlets", 3],
			"outlet four": [id, "outlets", 3],
		}
	}
}