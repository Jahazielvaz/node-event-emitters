var myEmitter = require("events");

var telephone = new myEmitter.EventEmitter();

var rings = 0;

var listener = function(){
	rings++
	console.log(rings);

	if(rings == 2){
		telephone.removeListener("phone-ring", listener);

	}
}

telephone.on("phone-ring", listener);

telephone.emit("phone-ring", listener);
telephone.emit("phone-ring", listener);
telephone.emit("phone-ring", listener);