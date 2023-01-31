/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
Figueroa Fernando DIV X*/
function sumar()
{
	//dclaracion de variables
	let NumeroUno;
	let NumeroDos;
	let Resultado;

	//asignacion de valores
	NumeroUno =document.getElementById("txtIdNumeroUno").value;

	NumeroDos =document.getElementById("txtIdNumeroDos").value;

	//definicion y parseo de variables
	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);

	//sumar los numeros
	Resultado= NumeroUno + NumeroDos;

	//resultado
	alert(`La suma es: ${Resultado}`);
}

