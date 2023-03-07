/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	// declarar variables y las inicializo
	let numero
	let maximo;
	let minimo; 
	let respuesta 
	let flag = true;
	
	/*numero = parseFloat(prompt("Ingrese un numero"));
	maximo = numero;
	minimo = numero;
	respuesta = prompt("Quiere seguir ingresando numeros?S para continuar y no para cancelar")*/

	//while(respuesta == `s`);
	do
	{	
		numero = parseFloat(prompt("Ingrese un numero"));

		//bandera
		if( flag == true || numero > maximo)
		{
			maximo = numero;
		}
		if( flag == true || numero < minimo)
		{
			minimo = numero;
			flag = false
		}
		/*if(flag == true)
		{
			maximo=
			minimo=
			flag=
		}
		 */
		respuesta = prompt ("Quiere seguir ingresando numeros?S para continuar y no para cancelar")
	}while(respuesta == `s`)

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
} //FIN DE LA FUNCIÓN