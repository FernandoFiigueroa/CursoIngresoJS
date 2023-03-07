/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	
	do
	{
		sexoIngresado = prompt("ingrese f para femenino ó m para masculino .");
	}while(sexoIngresado != `m`  && sexoIngresado != `f`);
	document.getElementById("txtIdSexo").value = sexoIngresado

	
}//FIN DE LA FUNCIÓN