function Head(){
	this.glasses=1
}
function Table(){
	this.pen=3
}
function Bed(){
	this.sheets=1
	this.pillows=2
}
function Pocket(){
	this.money=2000
}

//pens
Bed.prototype.pen = (function(){
	var table = new Table()
	return table.pen
})()
Pocket.prototype.pen = (function(){
	var bed = new Bed()
	return bed.pen
})()

//glasses
Table.prototype.glasses = (function(){
	var head = new Head()
	return head.glasses
})()
Bed.prototype.glasses = (function(){
	var table = new Table()
	return table.glasses
})()
Pocket.prototype.glasses = (function(){
	var bed = new Bed()
	return bed.glasses
})()

//sheet
Pocket.prototype.sheets = (function(){
	var bed = new Bed()
	return bed.sheets
})()

//pillow
Pocket.prototype.pillows = (function(){
	var bed = new Bed()
	return bed.pillows
})()

var table = new Table()
var head = new Head()
var bed = new Bed()
var pocket = new Pocket()
