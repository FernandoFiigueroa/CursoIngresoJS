/* Figueroa Fernando DIV X*/
function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;
	
	switch(destino)
	{
		case "Bariloche":
		mensaje = "Te encuentras en el Oeste";
		break;
		
		case "Ushuaia":
		mensaje ="Te encuentras en el Sur";
		break; 

		case "Mar del plata":
		mensaje = "Te encuentras en el Este";
		break; 

		case "Cataratas":
		mensaje = "Te encuentras en el Norte";
		break; 
	}

	alert(mensaje)

}//FIN DE LA FUNCIÓN