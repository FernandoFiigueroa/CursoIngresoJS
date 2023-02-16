/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
Figueroa Fernando DIV X*/
function mostrarAumento()
{
		//Defino las variables
		let sueldo;
		let descuento ;
		let importefinal;
	
		//Para calcular el nuevo sueldo le tengo que sumar el Descuento  al sueldo original
		//el porcentaje de un valor lo consigo multiplicando el valor por el porcentaje dividido 100
		sueldo = parseInt(document.getElementById("txtIdImporte").value);
	 	descuento = sueldo *  25 / 100;	
		importefinal = sueldo - descuento;
		document.getElementById("txtIdResultado").value = importefinal;

	}
