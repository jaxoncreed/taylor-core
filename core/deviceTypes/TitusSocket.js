import AbstractDevice from './AbstractDevice';

export default class TitusSocket extends AbstractDevice {
	constructor(id, initialState) {
		super.id = id;
		super.state = initialState;
		super.handlers = [];
	}
}