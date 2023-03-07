function mostrar()
{

	let numero
	let contadorDivisores = 0;
	let numeroIngresado
	
	numeroIngresado = parseInt(prompt("Ingrese un numero:"));
	for(numero = 1 ; numero <= numeroIngresado ; numero++ )
	{
		
		if ( numeroIngresado % numero== 0)
		{
			contadorDivisores++
			console.log(numero)
		}

	}
	console.log(`La cantidad de divisores son: ${contadorDivisores} `);


}//FIN DE LA FUNCIÓN