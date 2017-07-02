var request = require('request');
var url = 'http://ipinfo.io';

module.exports = function (){
	return new Promise(function(resolve, reject){
		request({url: url, JSON: true}, function(error, response, body){
			if(error){
				reject('UNABLE TO FETCH THE LOCATION');
			}
			else{
				var city = JSON.parse(body).city
				resolve(city);
			}
		});
	});
}




/*module.exports=  function(currentLocation){
	request({url: url, JSON: true},function(error,response,body){
		if (error){
			currentLocation('Unable to fetch the location');
		}
		else{
			currentLocation(body);
			//console.log(body)
		}
	});

}*/