
import TitusSocket from './TitusSocket';
import Weather from './Weather';
import Messenger from './Messenger'

export default function deviceFactory(config) {
	if (config.type === "titus_socket") {
		return new TitusSocket(config.id, config.state);
	} else if (config.type === "weather") {
		return new Weather(config.id);
	} else if (config.type === "messenger") {
		return new Messenger(config.id, config.state);
	}
}