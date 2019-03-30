function Calculator(num){
	this.val=num;
}

Calculator.prototype.getValue = function(){
	return this.val;
}

Calculator.prototype.add = function(num){
	return new Calculator(this.val+num)
}
Calculator.prototype.substract = function(num){
	return new Calculator(this.val-num)
}
