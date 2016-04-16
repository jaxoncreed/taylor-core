import startServer from "./server.js"
import DeviceStore from "./core/DeviceStore"

var deviceStore = new DeviceStore();

startServer(deviceStore);