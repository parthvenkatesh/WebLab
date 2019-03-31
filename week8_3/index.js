const c = require("./circ.js");
const q = require("./quad.js");
const t = require("./tria.js");

var r = 2;
var x = 1;
var y = 3
console.log("Circle of radius "+r);
c.area(r);
console.log("Quadratic fig of dimensions "+x+"x"+y);
q.area(x,y);
console.log("Triangle of dimensions "+x+"x"+y);
t.area(x,y);

