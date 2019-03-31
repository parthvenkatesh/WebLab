var recipe = {
	nam:'Pizza',
	serves:2,
	ingredients: function(){
			console.log('Dough')
			console.log('Sauce')
			console.log('Cheese')
			console.log('Toppings')
			}	
}

console.log('Name: '+recipe.nam)
console.log('Serves: '+recipe.serves)
console.log('Ingreidients')
recipe.ingredients()
