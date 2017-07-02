// callbacks are the functions which executes after they get the data.

var args = require('yargs')
				.options(
						'location',{
							demand: false,
							alias: 'l',
							description: 'Enter location',
							type: 'string'

						})
				.help('help')
				.argv;


var weather = require('./weather.js');
var location = require('./location.js');

/* if location was given */

if( typeof args.l === 'string' && args.l.length > 0){
	console.log('LOCATION PROVIDED');
	weather(args.l).then(function(currentWeather){
		console.log(currentWeather);
	}).catch(function(error){
		console.log(error);
	});

}

/* If location was not given
we are calling the loction function to fetch and then
weather function togive the current weather*/

else{
	console.log('LOCATION NOT PROVIDED');
	location().then(function(currentLocation){
		if(currentLocation){
			weather(currentLocation).then(function(currentWeather){
				console.log(currentWeather);
			});
		}
		else{
			console.log('unable to fetch the location');
		}
	});
}









/*var weather = require('./weather.js');
var location = require('./location.js');


weather(function(currentWeather){
	console.log(currentWeather);
})

location(function(location){
	console.log('city: ',JSON.parse(location).city);
    console.log('Region: ' ,JSON.parse(location).region);
})
*/

/*else{
	console.log('LOCATION NOT PROVIDED');
	location(function(location){
		if(location){
			weather(JSON.parse(location).city,function(currentWeather){
				console.log(currentWeather);
			});
		}
		else{
			console.log('unable to fetch the location');
		}
	});
}*/

