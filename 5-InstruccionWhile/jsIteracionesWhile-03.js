/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
/*Ejercicio Nro 1:
1) De los 100 participantes del torneo de P AC-MAN, se deben ingresar los datos de acuerdo a lo siguiente:
Nombre
● Sexo (“F” o “M”)
● Edad (validar de manera coherente)
● score (validar de manera coherente)
Informar:
a) La cantidad de participantes de sexo masculino.
b) El promedio de la edad de todos los participantes de sexo femenino.
c) El nombre del participante mayor de edad
Pedir datos por prompt y mostrar la información por document.write.*/
function mostrar()
{
	let nombre
	let respuesta;
	let sexo;
	let edad;
	let acumuladorMasculino=0;
	let acumuladorFemenino=0;
	let promedioParticipantesFemeninos;	
	let acumuladorEdad=0;
	let maximaEdad=0;
	
	for(respuesta=0; respuesta<3;respuesta++)
	{
		nombre=prompt("Ingrese su nombre");

		do
		{
			sexo=prompt ("Ingrese si es M o F");
		}while (sexo != `f` && sexo != `m`);

		do
		{
			edad=prompt("Ingrese su edad 13/100")
		}while (edad <13 || edad > 100);

		do
		{
			score=parseInt(prompt("Ingrese su score"))
		}while (score <=1000 && score >=10000);

		if(sexo == "m")
		{
			acumuladorMasculino++
		}
		else
		{
			acumuladorFemenino++ 
			acumuladorEdad= acumuladorEdad+ edad		
		}

		if(acumuladorMasculino>0)
		{
			console.log(`Hay una cantidad de ${acumuladorMasculino} participantes masculinos`);
		}

		if(edad>maximaEdad)
		{
			maximaEdad=edad
			console.log(`el nombre del participante con mayor edad es: ${nombre}`)
		}
		//respuesta=prompt("Desea Ingresar otra dato?");//Pregunto para terminar el ciclo
	}
	promedioedadFemeninos=acumuladorEdad/acumuladorFemenino;
	console.log(`Promedio de edad de femeninos es : ${promedioedadFemeninos}`)

}






















	/*//DO WHILE
	let contraseña;
	contraseña = prompt("Ingrese la contraseña");
	
	do{
		alert ( "contraseña incorrecta \n AYUDA : ES  `utn750`") ;
		contraseña = prompt("Ingrese la contraseña");
	}  while( contraseña!= "utn750");*/

	
	//no decimos cuando salir y se hace un loop infinito
	/*let contraseña;
	contraseña = prompt("Ingrese la contraseña")
	while( contraseña!= "utn750")
	{
		alert ( "contraseña incorrecta \n AYUDA : ES  `utn750`") 
	}*/ 


	//decimos cuando salir y el loop termina
	/*let contraseña;
	contraseña = prompt("Ingrese la contraseña");
	while( contraseña!= "utn750");
	{
		alert ( "contraseña incorrecta \n AYUDA : ES  `utn750`") ;
		contraseña = prompt("Ingrese la contraseña");
	}*/


	//Otra alternativa
	/*let contraseña;
	contraseña = prompt("Ingrese la contraseña")
	while( contraseña!= "utn750")
	{
		contraseña = prompt("contraseña incorrecta,Ingrese nuevamente la contraseña")
	}
	alert("Clave correcta")*/

	//

//FIN DE LA FUNCIÓN
