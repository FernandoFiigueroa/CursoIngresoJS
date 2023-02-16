/* Figueroa Fernando DIV X */
function mostrar()
{
	//tomo el mes
	let mes;
	mes = document.getElementById("txtIdMes").value;
	
	switch(mes)
	{
		case "Febrero":
		alert("Tiene 28 dias");
		break;
		
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		alert("Tiene 30 dias");
		break;

		default:
			alert("Tiene 31 dias");
		break;
	}
}
//FIN DE LA FUNCIÓN