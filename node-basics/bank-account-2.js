var accounts = [];

function createAccount(account){
	return accounts.push(account);
}


//getting userAccount
function getAccount(username){
	var userAccount;
	accounts.forEach(function(account){
		if(account.username === username){
			userAccount = account;
		}
		
	});

	
	return userAccount;
}

function deposit(account,amount){
	account.balance+= amount;
	return account;
}

function depositWithUserName(username,amount){
	var userAccount = getAccount(username);
	
	userAccount.balance +=amount;
	return userAccount;
}


var p1account ={
	username: "Venkata",
	balance: 1000
};

var p2account ={
	username: "Sairam",
	balance: 2000
};

createAccount(p1account);
createAccount(p2account);

var venkataAccount = getAccount("Venkata");
console.log(venkataAccount);
//console.log(getAccount("prasad"));  will return undefined.

var depositVenkata =deposit(venkataAccount,400);
console.log(`Final Account ${ JSON.stringify(depositVenkata) }`);

var depositVenkataWithUserName = depositWithUserName("Venkata",300);
print("Here it is" +depositVenkataWithUserName);



