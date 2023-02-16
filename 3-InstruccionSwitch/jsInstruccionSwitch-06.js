/* Figueroa Fernando DIV X*/
function mostrar()
{
	//tomo la hora
	let hora = parseInt(document.getElementById("txtIdHora").value);
	let mensaje;

	if(hora >=7 && hora <= 11)
	{
		mensaje = `Es de mañana`;
	} 
	else if( hora >=12 && hora<=19)
	{
		mensaje =  `Es de tarde`;
	}
	else if((hora >=20 && hora <=24) || (hora >=0 && hora <=6))
	{
		mensaje = `Es de noche.`;
	}
	else
	{
		mensaje = "la hora no existe.";
	}

	alert(mensaje);
	document.getElementById("txtIdHora").value = "";
	
	/*switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert( "Es de mañana.");
		break;
		
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert( "Es de tarde.");
		break;

		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:	
			alert( "Es de noche.");
		break;

		default:
			alert("la hora no existe.");
		break;
	
	}*/
}//FIN DE LA FUNCIÓN