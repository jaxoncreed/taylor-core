/* Assuming the data is like this
{
	intent:

}


*/


export default function messengerHandler(newState, deviceStore) {
	console.log(newState);
	const newMessage = newState.messages[newState.length - 1]
	if (newMessage.intent === 'MAP_SOURCE_TO_DESTINATION') {
		const dest = deviceStore.identities[newMessage.data.destination + " " + newMessage.data.number];
		if (!dest) {
			// Error, the destination is not recognized
		}
		deviceStore.identities[newMessage.data.source] = dest;
	} else if (newMessage.intent === 'TOGGLE') {
		deviceStore.setIdentityLocation(newMessage.data.source, newMessage.data.toggle);
	}
}