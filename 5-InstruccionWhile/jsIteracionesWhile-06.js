function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let otroNumero;

	contador=0;
	acumulador=0;

	while(contador < 5)
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numeroIngresado;//acumulador + = numeroIngresado//el acumulador va delante de la variable
		contador = contador + 1;//contador ++ // suma sin pisar el valor siempre va a valer el numero mas la suma,lo que hace aca es que una ves llegue a 5 termine el codigo
	}

	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;
}//FIN DE LA FUNCIÓN