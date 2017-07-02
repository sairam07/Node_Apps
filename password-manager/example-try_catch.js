try{
	throw new Error("this is try block in try catch")
}
catch(e){
	console.log(e.message);
}
finally{
	console.log("Finally block in try catch");
}