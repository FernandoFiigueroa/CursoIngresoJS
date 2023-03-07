/*
Recu Parcial 2020 2: Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas(0-300),
 Precio por bolsa (más de cero y menor a 10000 ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
 Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
                a)
                El importe total a pagar , bruto sin descuento y...
                b)
                el importe total a pagar con descuento(solo si corresponde)
                d)
                Informar la bolsa mas cara de Cal y la mas barata de Cemento.
                e)
                Cuantas bolsas de arena se compraron en total, y el promedio por compra.*/
				/*
 /*Vacaciones en Familia" 
Nos ingresan una cantidad indeterminada de estadías de vacaciones, 
validando los datos ingresados:
nombre del pasajero titular, 
destino( “Brasil”, “Caribe” o “Europa”), 
temporada(“alta”,”baja”,“media”),
cantidad de pasajeros que viajan.
Informar:
a)El destino más elegido.
b)El nombre del pasajero titular que lleva menos pasajeros.
c)El promedio de personas, que viajan en temporada alta.
d)El total de personas que viajaron a Europa.
*/
function mostrar()
{
	let nombre;
	let destino;
	let temporada;
	let pasajeros;
	let flag=true;
	let contador=0;
	let cantidadPasajeros=0;
	let contadorBrasil=0;
	let contadorEuropa=0;
	let contadorCaribe=0;
	let titularPasajeros;
	let acumulador=0;
	let contadorTemporadaAlta;
	let promedio=0;
	let cantidadEuropa=0;

	do
	{
		 do
        {
            nombre=prompt("Ingrese su nombre")
        }while(!isNaN(nombre));

		do
		{
			destino=prompt("Ingrese su destino")
		}while(destino !="Brasil" && destino !="Caribe"&& destino!="Europa");

		
		do
		{
			temporada=prompt("Ingrese temporada")
		}while(temporada !="baja" && temporada !="alta"&& temporada!="media");

		do
        {
            pasajeros=parseInt(prompt("Ingre cuantos pasajeros viajan"))
        }while( pasajeros<=0 || pasajeros>10);

		contador++

		switch(destino)
		{
			case("Brasil"):
			contadorBrasil++
			break;
			case("Caribe"):
			contadorCaribe++
			break;
			case("Europa"):
			contadorEuropa++
			break;
		}

		if(contadorEuropa>contadorBrasil && contadorEuropa>contadorCaribe)
		{
			console.log(`El viaje mas elejido es Europa`);
		}else if(contadorBrasil > contadorCaribe)
		{
			console.log(`El viaje mas elejido es Brasil`);
		}
		else
		{
			console.log(`El viaje mas elejido es el Caribe`);
		}

		if(flag==true || cantidadPasajeros<pasajeros)
		{
			cantidadPasajeros=pasajeros
			flag=false;
			titularPasajeros=nombre;
		}

		if(temporada == "alta")
		{
			contadorTemporadaAlta++
		}
		if(destino=="Europa")
		{
			cantidadEuropa+=pasajeros;
		}

		respuesta = prompt("Deses seguir ingresando datos? S/N")
	}while( respuesta == "S");

	acumulador+=pasajeros;
	promedio=acumulador/contadorTemporadaAlta;

	
	console.log(`El nombte del titula que menos pasajero lleva es ${titularPasajeros}`)
	console.log(`promedio de ${promedio} personas que viajan a europa`);
	console.log(`a europa van:${cantidadEuropa} personas`)





















}
/*	let tipo; 
    let bolsas; 
	let respuesta; 
	let precio=500;
	let precioUno;
	let descuentoMayorCuarentaYcinco;
	let descuentoMayorQuince;
	let contador
	let calCara;
	let cementoBarato
	let flagCemento=true;
	let flagCal=true;
	let contadorCal=0;
	let contadorCemento=0;
	let promedio;
	let promedioPrecio;
	let acumulador;
	let contadorArenas;

	do{
		do
        {
            i=prompt("Ingre si va acomprar arena,cal,cemento")
        }while(tipo == `arenas` && tipo == `cal` && tipo == `cemento`);

		do
        {
            i=parseInt(prompt("Ingrese cantidad de bolsas a comprar"))
        }while(bolsas < 0 || bolsas > 300);

		contador++
		if(bolsas > 15)
		{
			descuentoMayorQuince= precio*10/100
			descuentoMayorQuince = precio - descuentoMayorQuince;
			console.log(`Mayor a quince es ${descuentoMayorQuince}`)
		}
		if(bolsas > 45)
		{
		descuentoMayorCuarentaYcinco = precio * 30 / 100;
		descuentoMayorCuarentaYcinco = precio - descuentoMayorCuarentaYcinco;
		console.log(`Mayor a cuarenta y cinco es ${descuentoMayorCuarentaYcinco}`)
		}

		if(flagCal==true || calCara>precio)
		{
			calCara+=precio 
			contadorCal++
			flagCal=false
		}
		if(flagCemento=true || cementoBarato < precio)
		{
			cementoBarato+=precio
			contadorCemento++;
			flagCemento=false;
		}

		switch(bolsas)
		{
			case "arenas":
			contadorArenas++
			break
		}


		respuesta = prompt("Deses seguir ingresando datos? S/N")
	}while(respuesta=="si");

	precioUno= precio * contador;

	//proemdio

	promedio=precio*contadorArenas;
	promedioPrecio=promedio/contadorArenas;

				console.log("El importe total a pagar , bruto sin descuento " + precioUno)
                console.log("Informar la bolsa mas cara de Cal y la mas barata de Cemento.")
                console.log("Cuantas bolsas de arena se compraron en total, y el promedio por compra." + "se compraron" + contadorArenas + " de bolsas");
				console.log(`${promedioPrecio}`);*/
