function number(val){
	this.val=val
}

number.prototype.square = function(){
	return this.val**2
}
number.prototype.cube = function(){
	return this.val**3
}
number.prototype.sroot = function(){
	return this.val**0.5
}
var x = new number(3)
console.log(x.square())
console.log(x.cube())
console.log(x.sroot())
