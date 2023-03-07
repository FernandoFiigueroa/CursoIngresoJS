function mostrar()
{
	let numero
	let contadorPar = 0;
	let numeroIngresado
	
	numeroIngresado = parseInt(prompt("Ingrese un numero:"));
	for(numero = 1 ; numero <= numeroIngresado ; numero++ )
	{
		
		if ( numero % 2 == 0)
		{
			contadorPar++
			console.log(numero)
		}

	}
	console.log(`Pares encontrados ${contadorPar}`);


}//FIN DE LA FUNCIÓN