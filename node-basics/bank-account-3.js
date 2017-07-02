var bank_accounts = [];

function createAccount(account){
	bank_accounts.push(account);
}

function getAccount(id){
	var userAccount;
	if(typeof id === "number"){
		for(var i=0; i<bank_accounts.length; i++){
			if(bank_accounts[i].accountID === id){
				userAccount = bank_accounts[i];
			}
		}

		if(userAccount === undefined){
			console.log("Account Not found");
		}
	}
	else{
		console.log("Invalid Account Number");
	}	
	return userAccount;
}

function deposit(accountID, amount){
	var userAccount;
	if(checkNumberTypes(accountID) && checkNumberTypes(amount)){
		 userAccount = getAccount(accountID);
		userAccount.balance+=amount;
	}
	else{
		console.log("Deposit Failed");
	}
	return userAccount;
}

function getBalance(accountID){
	var userAccount = getAccount(accountID);
	return userAccount.balance;
}

function checkNumberTypes(number){
	return (typeof number === 'number');
}



var account1 = {
	accountID: 1001,
	userName: "Venkata",
	balance: 0
};

var account2 = {
	accountID: 1002,
	userName: "Sairam",
	balance: 100
};

createAccount(account1);
createAccount(account2);

var venkata = getAccount(1001);
console.log("Venkata Account Details: ",venkata);

var venkataDeposit = deposit(1001,200);
console.log("Venkata Account Details: ",venkataDeposit);
console.log("Balance is", getBalance(1001));

deposit(1002,'string');