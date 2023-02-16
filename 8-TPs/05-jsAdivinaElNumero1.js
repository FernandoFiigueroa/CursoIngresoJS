/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
/*let numeroSecreto; 
let contadorIntentos;
let MINIMO = 1;
let MAXIMO = 100;
let numero;
let intentos;*/

//numero = document.getElementById("txtIdNumero").value;

function comenzar()
{
  let numeroSecreto; 
  let contadorIntentos;
  let MINIMO = 1;
  let MAXIMO = 100;
  let numero;
  let intentos;

	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.round(Math.random()* (MAXIMO-MINIMO) + MINIMO); 
  if(intentos == numeroSecreto)
  {
    alert("Usted es un ganador y en solo X intentos");    
  }
   //document.getElementById("txtIdIntentos").value =intentos;
	alert(numeroSecreto );
	

}

function verificar()
{
	
	
}