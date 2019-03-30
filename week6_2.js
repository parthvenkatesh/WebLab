class Animal{
	constructor(name,sound,speed){
		this.nam=name
		this.sound=sound
		this.speed=speed
	}
	
	makeSound(){
		console.log(`${this.nam} just said ${this.sound}`)
	}
	
	run(time){
		this.makeSound()
		console.log(`${this.nam} will run for `+time+" seconds at "+this.speed+" m/s")
		var x = time*this.speed
		var n = this.nam
		setTimeout(function(){
			console.log(`${n} finished running `+x+" metres")
		},x)
	}
}
