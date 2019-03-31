const stackf = require("./stackfile.js");
const queuef = require("./queuefile.js");
console.log("Pushing values into stack and queue");
for(var i=0;i<5;i++){
	stackf.sinsert(i);
	queuef.qinsert(i);
	}
console.log("Inserted.Displaying Stack");
stackf.sdisplay();
console.log("Displaying Queue");
queuef.qdisplay();
console.log("Deleting contents of stack");
var i=0;
while(i<6){
	stackf.sdelet();
	i++;
	}
console.log("Deleting contents of Queue");
var i=0;
while(i<6){
	queuef.qdelet();
	i++;
	}
