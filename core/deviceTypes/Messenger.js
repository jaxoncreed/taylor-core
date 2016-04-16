import AbstractDevice from './AbstractDevice';
import messengerHandler from '../../messengerHandler/messengerHandler'

export default class TitusSocket extends AbstractDevice {
	constructor(id, initialState) {
		super(id);
		this.state = initialState;
		this.handlers = [messengerHandler];
	}
}