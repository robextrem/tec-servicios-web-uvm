/*function calcularSalario(sueldo, moneda){
	const resultado = sueldo * 1.16 // Sueldo + IVA 16%
	return  `$ ${resultado} ${moneda}`
}*/

const calcularSalario = (sueldo, moneda) => {
	const resultado = sueldo * 1.16 // Sueldo + IVA 16%
	return  `$ ${resultado} ${moneda}`
}

/*
const calcularSalario = (sueldo, moneda) => `$ ${sueldo * 1.16} ${moneda}`
*/


const dameUnNumero = () => 6

const dameUnNumeroConReturn = () => {
	return 6
}

function dameUnNumeroConFunction(){
	return 6
}

/**
 * sueldo = 1000
 * moneda = "MXN"
 * calcularSalario(sueldo, moneda) = $ 1160 MXN
 */

const calculo = calcularSalario(1000, "MXN")
console.log(calculo)
console.log(dameUnNumero())

//console.log(calcularSalario)