/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"
Figueroa Fernando DIV X*/ 
function sumar()
{	
	//Defino las variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//el usuario ingresa el dato dandole valor a las variables
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	resultado= numeroUno + numeroDos;
	
	alert(`La suma es: ${resultado}`);
}

function restar()
{
	let numeroUno 
	let numeroDos 
	let resultado2

	numeroUno= parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos= parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado2= numeroUno - numeroDos;
	
	alert(`La resta es: ${resultado2}`) 

}

function multiplicar()
{ 
	let numeroUno; 
	let numeroDos; 
	let resultado3;


	numeroUno= parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos= parseInt(document.getElementById("txtIdNumeroDos").value);


	resultado3= numeroUno * numeroDos;
	
	alert(`La Multiplicacion es: ${resultado3}`)
}

function dividir()
{
	let numeroUno 
	let numeroDos 
	let resultado4


	numeroUno= parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos= parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado4= numeroUno / numeroDos;
	
	alert(`La division es: ${resultado4}`)	
}

