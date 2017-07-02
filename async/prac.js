var func1 = function(callbackcode){
	callbackcode("this is for test");
}

var invokerMain=func1;
invokerMain(function(callback){
	console.log(callback);
})

var print=function(sentence){
	console.log(sentence);
}
print('this is me');