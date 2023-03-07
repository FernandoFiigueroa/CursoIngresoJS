function mostrar()
{


	let numero;
	let numeroIngresado;
	let contadorPrimo=0;
	
	numeroIngresado=parseInt(prompt("Ingrese un numero:"));

	while(isNaN(numeroIngresado))
	{
		numeroIngresado= parseInt(prompt("Eso no es numero.Ingrese un numero"))
	}

	for(numero=1 ; numero<=numeroIngresado ; numero++ )
	{
		
		if(numeroIngresado % numero == 0)
		{
			contadorPrimo++;
		}
	}
	if(contadorPrimo !=0 || numeroIngresado<=1)
	{
		alert(`${numeroIngresado} no es primo`);
	}
	else
	{
		alert(`${numeroIngresado} es primo`)
	}
	

}//FIN DE LA FUNCIÓN