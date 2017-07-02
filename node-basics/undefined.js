function greetUser(name){
	if(typeof name ==='undefined'){
		console.log("Hello World!");
	}
	else{
		console.log("Hello" +name +"!");
	}
}

greetUser("Sairam");
greetUser();
greetUser(1);

//output
HelloSairam!
Hello World!
Hello1! //which means there is no default typeChecking 