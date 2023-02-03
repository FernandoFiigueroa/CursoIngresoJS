/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Figueroa Fernando DIV X*/
function mostrarAumento()
{
	//Defino las variables
	let sueldo;
	let nuevoSueldo;
	let aumento;

	//Para calcular el nuevo sueldo le tengo que sumar el aumento al sueldo original
	//el porcentaje de un valor lo consigo multiplicando el valor por el porcentaje dividido 100
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	aumento = sueldo * 10 / 100;
	nuevoSueldo= sueldo + aumento;
	document.getElementById("txtIdResultado").value = nuevoSueldo.toFixed(2)//es para poner la cantidad de decimales que quiero que me muestre;
	
}
