import YQL from 'yql'

export default class weather {

	constructor(updateState) {
		this.updateState = updateState;
	}

	// call this to start weather polling
	startPoll() {
		this._interval = setInterval(() => {
			YQL('SELECT * FROM weather.forecast WHERE woeid = 2357024')
				.exec((err, resp) => {
					if (resp && resp.query && resp.query.results && resp.query.channel) {
						const formattedResp = this._formatData(resp.query.results.channel);
						this.updateState(formattedResp);
					}
				})
		}, 10000);
	}

	_formatData(json) {
		const today = json.item.condition
		const tomorrow = json.item.forecast ? json.item.forecast : []

		return {
			today: {
				temp: today.temp,
				text: today.text,
			},
			tomorrow: {
				low: tomorrow[1].low,
				high: tomorrow[1].high,
				text: tomorrow[1].text
			}
		}
	}

	// call this to stop polling
	stopPoll() {
		clearInterval(this._interval)
	}

	stateUpdated(newState) {

	}
}
