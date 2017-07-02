console.log("starting the password manager");

//var crypto = require('crypto-js');
var storage = require('node-persist');
storage.initSync(); 

var args = require('yargs')
			.command('createAccount','create login account',function (yargs) {
				yargs.options({
					name: {
							demand: true,
							alias: 'an',
							description: 'Account Name',
							type: 'string'
					},
					username: {
							demand: true,
							alias: 'un',
							description: 'Please Enter User Name',
							type: 'string'

					},
					password: {
							demand: true,
							alias: 'pw',
							description: 'Please Enter password',
							type: 'string'
					}
					
				}).help('help');
			})
			.command('get','get login account',function (yargs) {
				yargs.options({
					name: {
							demand: true,
							alias: 'an',
							description: 'Account Name',
							type: 'string'
					},
					
				}).help('help');
			})
			.help('help')
			.argv;

var command = args._[0];




function createAccount(account){
	var userAccounts = storage.getItemSync('logins');

	if(userAccounts === undefined){
		userAccounts = [];
	}
	
	userAccounts.push(account);
	console.log("Account created successfully");
	storage.setItemSync("logins",userAccounts);
	
	return userAccounts;
}

function getAccount(accountName){
	var userAccounts = storage.getItemSync("logins");
	var matchedAccount;
	if(userAccounts === undefined){
		console.log("No Accounts existed");
	}
	else{
		for (var i =0; i<userAccounts.length;i++){
			if(userAccounts[i].name === accountName){
				matchedAccount = userAccounts[i];
			}
			
		}
		if(matchedAccount == undefined)
			console.log("No Account Found");
	}
	return matchedAccount;
}



if(command === 'createAccount' && args.name !== undefined && args.username !== undefined && args.password !== undefined){
	var account = {
		name: args.name,
		userName: args.username,
		password: args.password
	};
	createAccount(account);
	console.log(account);
}
else if(command === 'get' && args.name !== undefined && args.masterPassword !== undefined) {
	var account = getAccount(args.name,args.masterPassword);
	console.log(account);
}

