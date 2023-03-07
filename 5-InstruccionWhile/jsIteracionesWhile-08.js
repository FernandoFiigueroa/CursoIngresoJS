/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//flag
	let respuesta;
	let sumaPositivos;
	let multiNegativos;
	let entrada;
	let flag;

	sumaPositivos=0;
	multiNegativos=1;
	flag=true;

	do
	{
		entrada = parseInt(prompt("Ingrese un numero"));

		if(entrada >=0)
		{
			sumaPositivos = sumaPositivos + entrada;
		}
		else 
		{
			flag = false;
			multiNegativos = multiNegativos * entrada;
		}

		if(flag==true) 
		{
			multiNegativos = 0;
		}
		
		respuesta = prompt("Quiere seguir sumando? s/n");
	}while(respuesta == `s`);
		
	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiNegativos;

}//FIN DE LA FUNCIÓN