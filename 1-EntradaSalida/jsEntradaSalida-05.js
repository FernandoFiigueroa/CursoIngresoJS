/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 
Figueroa Fernando DIV X	*/
function mostrar()
{	

	//Variable del nombre
	let nombre;

	//variable de la edad
	let edad;

	//almacena lo que usuario ingrese en nombre
		 nombre= document.getElementById("txtIdNombre").value;

	 //almacena lo que usuario ingrese en edad
		 edad= document.getElementById("txtIdEdad").value;

	//alert("Usted se llama " + nombre + " y tiene " + edad + " años ") ;

	//plantilla de cadenas - concatenar
		alert(`usted se llama ${nombre} y tiene ${edad} años`);
}

