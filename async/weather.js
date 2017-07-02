var request = require('request');

module.exports = function getWeather(location){
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


/*module.exports=function(location,currentWeather){
	var encodedLocation = encodeURIComponent(location);
	url = 'http://api.openweathermap.org/data/2.5/weather?q=' +encodedLocation+ '&appid=e5a26194527a83529b4a59aeea6a0d49&units=imperial';
	request({url: url,json: true}, function(error,response,body){
	if(error){
		currentWeather('Unable to fetch weather data');
	}
	else{
		//console.log(JSON.stringify(body,null,4));
		console.log(typeof(body));
		var temperature=body.main.temp;
		var city = body.name;
		currentWeather('it\'s'+' ' +temperature + ' '+'in' + ' ' + city );
	}
});

}*/