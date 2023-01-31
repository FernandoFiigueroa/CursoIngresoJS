/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'.
Figueroa Fernando DIV X
*/
function mostrar()
{
	//declaro la variable
	let nombre

	//asigno lo escribio el usuario en el teclado a la variable
	nombre = prompt ("ingrese un dato");

	//el valor de la variable la asigno a la caja de texto de html
	document.getElementById("txtIdNombre").value = nombre;
}

