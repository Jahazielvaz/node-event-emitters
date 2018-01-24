var events = require("events");

function Cat(){
	var self = this;
	self.speak = function(){
		self.emit("speak", "meow");
	}
}

Cat.prototype = new events.EventEmitter();
 
var myCat = new Cat();

myCat.on("speak", function(message){
	console.log(message);
});

myCat.speak();