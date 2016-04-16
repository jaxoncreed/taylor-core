
import TitusSocket from './TitusSocket';

export default function deviceFactory(config) {
	if (config.type === "titus_socket") {
		return new TitusSocket(config.id, config.state);
	}
}