/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;
	contador=0;
	acumulador=0;

	do
	{
		numeroIngresado=parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numeroIngresado;
		contador ++;// contador + 1; 	// el contador aca lo uso para la division
		respuesta = prompt("Quieres seguir sumando? Ingrese s o n");
	}while(respuesta === `s`);

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN