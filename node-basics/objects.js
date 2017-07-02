var person ={};

person.firstName = "Venkata";
person['lastName'] = "Adusumilli";

function greetPerson(){
	console.log("Hello" + person.firstName + " " + person.lastName);
}

greetPerson();