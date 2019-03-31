var shape = {
 type: 'shape',
 getType: function () {
 return this.type;
 }
}
function Triangle(a, b, c) {
 this.a = a;
 this.b = b;
 this.c = c;
}
Triangle.prototype = shape
Triangle.prototype.constructor = Triangle
Triangle.prototype.type = 'triangle'
