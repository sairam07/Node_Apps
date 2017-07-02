var request = require('request');


function weather(location){
	return new Promise(function (resolve, reject){
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' +encodedLocation+ '&appid=e5a26194527a83529b4a59aeea6a0d49&units=imperial';
		request({url:url, JSON: true},function(error,response,body){
			if(error){
				reject('something Went wrong');
			}
			else{
				console.log(typeof(body));
				var body1 = JSON.parse(body);
				var temperature=body1.main.temp;
				var city = body1.name;
				resolve('it\'s ' +temperature + ' in ' +city );
			}
		});
	});
}

weather('Ashburn').then(function(data){
	console.log(data);
},function(error){
	console.log(data);
});