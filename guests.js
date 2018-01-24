var myEmitter = require("events");

var doorbell = new myEmitter.EventEmitter();

// var Guest = function(person){
// 	this.person = person;
// }

// john = new Guest("john");
// john.person = 25;

var john = {
		name : "John",
		age : 25
	}

var charles = {
	name: "Charles",
	age: 56
};

// var people = {
// 	name: john, 
// 	name: charles
// }

function welcome(age){
	if(age < 25){
		doorbell.emit("greeter", greeting);

	} else{
		doorbell.emit("greeter2", greeting2);
	}
};

// setInterval(welcome, 2000);

function greeting(){
	console.log("Welcome, young man!");
};

function greeting2(){
	console.log("Welcome to the party");
};

doorbell.on("greeter", welcome);
doorbell.on("greeter2", welcome);

welcome(20);




