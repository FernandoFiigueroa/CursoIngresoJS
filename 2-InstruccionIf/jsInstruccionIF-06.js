/* Figueroa Fernando DIV X*/
function mostrar()
{
	let edad

	//tomo la edad 
	edad = parseInt(document.getElementById("txtIdEdad").value);

	

	 if(edad >= 18)
	{
		alert("Eres mayor de edad");
	}
	else 
	{
		if (edad >= 13 && edad <=18)
		{
		alert ("Eres adolescente");
		}
		else
	{ 
		
		alert("Eres menor de edad");
	}

	}
	/* 
	if(edad < 13)
	{	
		alert("Eres menor de edad");
	}
	
	else if(edad >= 13)
	{
		alert ("Eres adolescente");
	}

	else if(edad >= 18)
	{
		alert("Eres mayor de edad");
	}*/
	
	
	



}//FIN DE LA FUNCIÓN