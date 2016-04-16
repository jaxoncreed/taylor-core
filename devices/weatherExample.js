import Weather from './weather'

const weather = new Weather((state) => {
  console.log('====', state)
})

weather.startPoll()
