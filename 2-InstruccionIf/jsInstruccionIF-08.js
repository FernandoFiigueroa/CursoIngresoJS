/* Figueroa Fernando DIV X*/
function mostrar()
{
	let edad;
	let estadoCivil;
	
	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//Tomo estado civil
	estadoCivil = document.getElementById("estadoCivil").value;

	if  (edad >= 18 && estadoCivil == "Soltero" )
	{
		alert('Es soltero y no es menor.')
	}
	


}//FIN DE LA FUNCIÓN

/* condicion de negacion:

if(!(edad <18 || estadoCivil != "soltero"));
{	
	alert('Es soltero y no es menor.')
}*/