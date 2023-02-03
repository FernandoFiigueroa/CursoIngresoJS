/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
Figueroa Fernando DIV X*/
function SacarResto()
{
		//Defino las variables
		let Dividendo;
		let Divisor;
		let Resultado;
	
		//el usuario ingresa el dato dandole valor a las variables
		Dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
		Divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
		
		Resultado= Dividendo % Divisor;
		
		alert(`El resto es: ${Resultado}`);
 }
