/* Figueroa Fernando DIV X*/
function mostrar()
{
	//inicializacion de variables
	let estacion; 
	let destino;
	let estadia;
	let porcentaje;
	let precioFinal;

	//declaracion de variables
	estadia = 15000;
	porcentaje = 0;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	//sentencia switch
	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
					break;
				case "Mar del plata":
					porcentaje = -20;
				break;
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 20;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 10;
					break;
				case "Cordoba":
					break;
			}
			break;
	}//Fin de switch

		precioFinal= estadia+ estadia * porcentaje / 100;

		//alert
		alert (`Precio final es ${precioFinal}`);

	}//FIN DE LA FUNCIÓN

	/*if (porcentaje > 0)
	{
		porcentaje = ESTADIA * porcentaje / 100;
		precioFinalDescuento = ESTADIA - porcentaje;
   	}

	if (porcentaje > 0)
	{
		porcentaje = ESTADIA * porcentaje / 100;
		precioFinalAumento = ESTADIA + porcentaje;
	}
	alert(precioFinalAumento);
	alert(precioFinalDescuento);*/
