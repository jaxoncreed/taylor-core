/* Assuming the data is like this
{
	intent:

}


*/


export default function messengerHandler(newState, deviceStore) {
	console.log(newState);
	const newMessage = newState.messages[newState.length - 1]
	if (newMessage.intent === 'equation') {
		var unknown = deviceStore.identities[newMessage.entities[0]];
		var known = deviceStore.identities[newMessage.entities[0]];
		if (!deviceStore.identities[newMessage.entities[1]]) {
			unknown = newMessage.entities[0];
			known = newMessage.enttities[1]
		}
		deviceStore.identities[unknown] = known;
	}
}