
	var x = [];
	function insert(v){
		let p = x.push(v);
		if(p==null)
			console.log("Unsuccessfull\n");
		else
			console.log("Successfull\n");
	}
	function delet(){
		let p = x.shift();
		if(p==null)
			console.log("Unsuccessfull\n");
		else
			console.log("Deleted "+p+"\n");
	}
	function display(){
	for(let i=0;i<x.length;i++)
		console.log(i);
	}


module.exports={qinsert:insert,qdelet:delet,qdisplay:display}
