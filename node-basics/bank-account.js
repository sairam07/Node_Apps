var baccount ={
	balance :0
};

function deposit(amount){
	return baccount.balance += amount;
}

function withdraw(baccount, amount){
	return baccount.balance -= amount;
}

function getBalance(baccount){
	return baccount.balance;
}

console.log(deposit(30));
console.log(withdraw(baccount,10));
console.log(getBalance(baccount));