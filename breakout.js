require('dotenv').config();

var request = require('request');
var moment = require('moment');

var weather = {
  'clear-day': '☀️',
  'clear-night': '🌙',
  'cloudy': '☁️',
  'fog': '🌁',
  'partly-cloudy-day': '⛅️',
  'partly-cloudy-night': '🌙',
  'rain': '☔️',
  'sleet': '❄️ ☔️',
  'snow': '❄️',
  'wind': '🍃',
  'error': '❗️'
};

request({
  url: `http://api.ipstack.com/check`,
  qs: {
    access_key: process.env.IPSTACK_SK
  }
}, function(error, response, body) {
  var data = JSON.parse(body);

  console.log('Location: ' + data.city + ', ' + data.region_code)
  
  getWeather(data.latitude, data.longitude)
});

function getWeather(lat, long) {
  request({
    url: `https://api.darksky.net/forecast/${process.env.DARKSKY_SK}/${lat},${long}/`,
    qs: {
      units: 'ca'
    }
  }, function(error, response, body) {
    var data = JSON.parse(body);

    var days = data.daily.data;
    
    days.forEach(function(day) {
      var date = moment(day.time * 1000);

      console.log(date.format('dddd, MMMM Do') + '\t\t' + Math.round(day.temperatureLow) + '° to ' + Math.round(day.temperatureHigh) + '° \t' + weather[day.icon])
    })
  });
}