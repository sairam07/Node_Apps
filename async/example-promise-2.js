//Advanced Promises

var request = require('request');

function getLocation(){
	return new Promise(function (resolve,reject){
		var url = 'http://ipinfo.io';
		request({url: url , JSON: true}, function(error, response, body){
			if(error){
				reject('LOCAION CAN NOT BE FETCHED');
			}
			else{
				var city = JSON.parse(body).city;
				resolve(city);
			}
		});
	});
}

function getWeather(location){
	return new Promise(function (resolve,reject){
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' +encodedLocation+ '&appid=e5a26194527a83529b4a59aeea6a0d49&units=imperial';
		request({url: url, JSON: true}, function (error, response,body){
			if(error){
				reject('CAN NOT GET WEATHER');
			}
			else{
				var weather = JSON.parse(body);
				var temperature = weather.main.temp;
				var city = weather.name;
				resolve('it\'s ' +temperature + ' in ' +city);
			}
		});
	});
}

getLocation().then(function(location){
	console.log(location);
	
	getWeather(location).then(function(weather){
		console.log(weather);
	});
});

