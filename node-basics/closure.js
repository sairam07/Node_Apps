function createAdder(baseNumber){
	return function adder(num){
		return baseNumber + num;
	}
	
}

var tenAdder = createAdder(10);
console.log(tenAdder);
//console.log(tenAdder(2)); 

console.log(true==="true");
