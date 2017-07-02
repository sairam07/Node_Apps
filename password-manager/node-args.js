var args = require('yargs')
			.command('hello','greeting user', function (yargs) {
				yargs.options({
					name: {
						demand: true,
						alias:'n',
						description: 'Enter your first name'
					},
					lastname: {
						demand: true,
						alias: 'l',
						description: 'Your last name'
				}
			}).help('help');
		})
		.help('help')
		.argv;

var command = args._[0];

if(command === 'hello' && args.name !== undefined && args.lastname !== undefined){
	console.log("Hello " +args.name +' ' +args.lastname);
}
