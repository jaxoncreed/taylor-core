import startServer from "./server.js"
import DeviceStore from "./core/DeviceStore"
import Weather from "./core/deviceTypes/Weather"

import WeatherServer from "./devices/weather"

var deviceStore = new DeviceStore();

var weather = deviceStore.addDevice(new Weather('weatherApi'));
const weatherServer = new WeatherServer((state) => {
	weather.setState(state);
});
weather.subscribeHandler(weatherServer.stateUpdated);
weatherServer.startPoll();

startServer(deviceStore);