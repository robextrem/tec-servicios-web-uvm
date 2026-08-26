const frutas = ["limon", "pera", "manzana", "uva", "sandia", "zapote"]
/*
for(let control=0 ; control < 10 ; control++){
	console.log(control)
}*/

frutas[1] = "naranja"
console.log(frutas)

for(let i = 0; i < frutas.length; i++){
	if(i % 2 === 0) {
		console.log(frutas[i])
	}
}
console.log("Empieza el foreach")

frutas.forEach(function(fruta, index){
	console.log(fruta)
})
