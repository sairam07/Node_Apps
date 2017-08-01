/*

This is to store passwords for all accounts in an encrypted way

Please find the below commands to use it.

creating account command: node app.js createAccount --an facebook --un abcdef --password abc123 --mp 123
get account: node app.js get --an facebook --mp 123

*/

console.log("starting the password manager");

var crypto = require('crypto-js');
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
					},
					masterPassword: {
							demand:true,
							alias: 'mp',
							description: 'Please Provide Master password',
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
					masterPassword: {
							demand:true,
							alias: 'mp',
							description: 'Please Provide Master password',
							type: 'string'
					}
					
				}).help('help');
			})
			.help('help')
			.argv;

var command = args._[0];



function saveAccounts(userAccounts,masterPassword){
	var encryptAccounts = crypto.AES.encrypt(JSON.stringify(userAccounts),masterPassword);

	storage.setItemSync("logins",encryptAccounts.toString());

	return userAccounts;
}

function getEncryptedAccounts(masterPassword){
	var encryptedAccounts = storage.getItemSync('logins');
	var userAccounts = [];

		if(encryptedAccounts !== undefined){
			var bytes = crypto.AES.decrypt(encryptedAccounts,masterPassword);
			userAccounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
		}
	return userAccounts;
}


function createAccount(account, masterPassword){
	var userAccounts = getEncryptedAccounts(masterPassword);

	userAccounts.push(account);
	console.log("Account created successfully");
	//storage.setItemSync("logins",userAccounts);
	saveAccounts(userAccounts,masterPassword);
	return userAccounts;
}

function getAccount(accountName, masterPassword){
	var userAccounts = getEncryptedAccounts(masterPassword);
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
	try{
		var account = {
		name: args.name,
		userName: args.username,
		password: args.password
	};
	createAccount(account,args.masterPassword);
	console.log(account);
	} 
	catch(e) {
		console.log("Unable to create account");
	}
}
else if(command === 'get' && args.name !== undefined && args.masterPassword !== undefined) {
	try{
		var account = getAccount(args.name,args.masterPassword);
		console.log(account);
	} 
	catch(e) {
		console.log("Unable to fetch the account");
	}
}

