import YQL from 'yql'
import fetch from 'node-fetch'

export default class News {

	constructor(updateState) {
		this.updateState = updateState;
	}

	pollNews() {
		console.log('asdgasdg')
		fetch('http://api.nytimes.com/svc/topstories/v1/technology.json?api-key=41af58aa7bfc237c09ba4cff2f64f712:2:73257389')
			.then((resp) => {
				return resp.json()
			})
			.then((json) => {
				json.results = json.results ? json.results : []

				this.updateState(this._formatArticles(json.results))
			})
			.catch((err) => {
				console.log('err', err)
			})
	}

	_formatArticles(json) {
		json = json.slice(0, 2)

		const articles = json.map((article) => {
			return {
				title: article.title,
				abstract: article.abstract,
				image: article.multimedia.length >= 3 ? article.multimedia[2].url : ''
			}
		})

		return articles
	}

	stateUpdated(newState) {

	}
}
