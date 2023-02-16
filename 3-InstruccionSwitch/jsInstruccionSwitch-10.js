function mostrar()
{
	let estacion; 
	let destino;
	let mensaje;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
		switch(destino)
		{
			case "Bariloche":
				mensaje = `Se viaja`;
				break;
			case "Cataratas":
			case "Mar del plata":
			case "Cordoba":	
				mensaje = ` No se viaja`;
				break;
		}
		break;
		case "Verano":
			switch(destino)
			{
			case "Cataratas":
			case "Mar del plata":
				mensaje = `Se viaja`;
				break;
				
			case "Bariloche":
			case "Cordoba":
				mensaje = ` No se viaja`;
				break;
			}
			break;
		case "Otoño":
			switch(destino)
			{
			case "Bariloche":
			case "Cordoba":
			case "Cataratas":
			case "Mar del plata":
				mensaje = `Se viaja`;
				break;
			}
			break;
		case "Primavera":
			switch(destino)
			{
			case "Cordoba":
			case "Cataratas":
			case "Mar del plata":
				mensaje = `Se viaja`;
				break;
				
			case "Bariloche":
				mensaje = ` No se viaja`;
				break;
			}
				break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN