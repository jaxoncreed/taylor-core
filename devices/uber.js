// import YQL from 'yql'
// import request from 'request'
//
// const uberApiHost = 'https://sandbox-api.uber.com/v1'
//
// export default class Uber {
//
// 	constructor(updateState) {
// 		this.updateState = updateState;
// 	}
//
// 	request() {
// 		request.post({
// 			 url: uberApiHost + "/requests",
// 			 json: true,
// 			 headers: {
// 					 "content-type": "application/json",
// 					 "Authorization": "Bearer " + token
// 			 },
// 			 body: body
// 	 }, function (error, response, body) {
// 			 switch (response.statusCode) {
// 					 case 409:
// 							 res.redirect(body.meta.surge_confirmation.href);
// 							 break;
// 					 case 202:
// 							 // Request accepted
// 							 var requestId = body.request_id;
// 							 res.redirect('/trips/' + requestId);
// 							 break;
// 					 default:
// 			 }
// 	 })
// 	}
//
// 	stateUpdated(newState) {
//
// 	}
// }
