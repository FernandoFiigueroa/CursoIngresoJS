/* Figueroa Fernando DIV X*/
function mostrar()
{
	let edad;
	let respuesta;
	let nombre;
	let obraSocial;
	let temperaturaCorporal;
	let sexo;
	let precio=9000;
	let acumuladorPami=0;
	let mujerMasJoven=0;
	let temperaturaMujerMasJoven;
	let contadorViajes=0;
	let precioTotal;
	let descuento=0;
	let contadorPami=0;
	let porcentaje;
	let edadMasBajaFlag=true;
	let precioConDescuento;

	do
	{	
		nombre = prompt("Ingrese su nombre")
	
		do
		{
			obraSocial=prompt("Ingrese su obra social.");
		}while(obraSocial!= `PAMI` && obraSocial != `OSDE` && obraSocial !=`otra`);

		do
		{
			edad=parseInt(prompt("Ingrese su edad"));
		}while( isNaN(edad) || edad< 8 || edad > 90);

		do
		{
			temperaturaCorporal=parseInt(prompt("Ingrese su temperaturaCorporal:"));
		}while(temperaturaCorporal < 25 || temperaturaCorporal > 43);

        do
        {
            sexo=prompt("Ingrese su sexo (f/m/nb");
        }while(sexo !=`f`&& sexo != `m`&& sexo != `nb` );
		
		switch(obraSocial)
		{
			case "PAMI":
				contadorPami++;
				if(edad > 60)
				{
					acumuladorPami++;
				}
				break;

			case "OSDE":
				if(edadMasBajaFlag==true||sexo=="f"|| edad<mujerMasJoven)
				{
					mujerMasJoven=edad;
					temperaturaMujerMasJoven=nombre;
					console.log(` la Mujer mas joven tiene : ${mujerMasJoven} años y tiene una temperatura corporal de: ${temperaturaMujerMasJoven}`);
					edadMasBajaFlag=false;
				}
		}

		/*if(obraSocial=="PAMI" && edad > 60)
		{
			acumuladorPami++;
		}
		else if(obraSocial=="OSDE" && sexo == "f"&& edad< mujerMasJoven)
		{
			mujerMasJoven=edad;
			temperaturaMujerMasJoven=temperaturaCorporal;
			console.log(` la Mujer mas joven tiene : ${mujerMasJoven} años y tiene una temperatura corporal de: ${temperaturaMujerMasJoven}`);
			edadMasBaja=false;
		}*/

		contadorViajes++;

		respuesta = prompt("Desesa seguir ingresando dato (s/n)?")
	}while(respuesta == `s`);

	precioTotal= precioTotal * contadorViajes;

	porcentaje = contadorViajes / contadorPami * 100;

	console.log(` La cantidad de personas con PAMI de mas de 60 años. ${acumuladorPami}`)
	console.log(`El nombre y temperatura de la mujer OSDE mas joven ${mujerMasJoven} y ${temperaturaMujerMasJoven}`) 
	console.log(`Cuanto sale el viaje total sin descuento. ${precioTotal}`)
	
	if(porcentaje >= 50)
	{
		descuento = precioTotal * 25 / 100;
		descuento = precioTotal - descuento;
		console.log(`Si hay mas del 50% de los pasajeros que pertenecen a PAMI,el precio final tiene un descuento del 25%, que solo mostramos si corresponde.${descuento}`)
	}
	/*let numero;
	const MINIMO = 1;
	const MAXIMO = 10;
	numero = Math.round(Math.random() * (MAXIMO - MINIMO) + MINIMO);

	alert(numero);*/
}//FIN DE LA FUNCIÓN