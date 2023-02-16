/*Figueroa Fernando DIV X*/
function mostrar()
{
	//tomo el mes
	let mes
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Julio":
		case "Agosto":
				alert("Abrigate que hace frio.");
		break;
				
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.")
		break;

		default:
			alert( "Falta para el invierno.")
		break;
	}
}
						
						
						//FIN DE LA FUNCIÓN