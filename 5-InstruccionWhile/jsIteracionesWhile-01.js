/*Figueroa Fernando DIV X
EJERCICIO 2:
	
2) De 10 corredores de atletismo se deben ingresar y validar los siguientes datos:
nombre
edad
tiempo(dato entero expresado en segundos)
sexo
Informar:
a) El nombre del hombre con más tiempo(si lo hay).
b) El promedio de la edad de todos los participantes.
c) La cantidad de corredores de sexo femenino.
*/
function mostrar()
{

	let nombre;
	let acumulador=0;
	let edad;
	let i;
	let tiempo;
	let sexo;
	let flag=true;
	let tiempoRecord;
	let nombreHombreRecord
	let promedio=0;
	let contador=0;
	let contadorFemeninos=0;
	
	for(i=0 ; i<10;i++)
		{
			do
			{
				nombre=prompt("Ingrese su nombre de usuario");
			}while(!isNaN(nombre));

			do
       		{
            	edad=parseInt(prompt("Ingrese edad"));
       		}while(edad <13 || edad >96);

			   do
       		{
            	tiempo=parseInt(prompt("Ingrese su tiempo"));
       		}while( tiempo<0 || edad >1000);

			do
			{
				sexo=prompt("Ingrese su sexo. f/m");
			}while(sexo!=`f` && sexo != `m`);

			contador++

			if(sexo == "m")
			{
				if(flag==true || tiempoRecord<tiempo)
				{
					tiempoRecord=tiempo;
					nombreHombreRecord=nombre;
					document.write(`El nombre del hombre con más tiempo(si lo hay).${nombreHombreRecord}<br>`);
					flag==false;
				}
			}

			if(sexo== "f")
			{
				contadorFemeninos++
			}

		}	
		acumulador+=edad;
        promedio=acumulador/contador;

		document.write(` El promedio de la edad de todos los participantes. ${promedio.toFixed(2)} <br>`),
		document.write(`La cantidad de corredores de sexo femenino.${contadorFemeninos}<br>`);






}
/*Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados:

nombre del titular ,
lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
temporada(“alta”, “baja”),
cantidad de días que durará el viaje.

a- cantidad de personas que viajan en cada temporada
b- el peso acumulado de todos los que viajan a villa gessel*/



/*"Inmobiliaria" Se esta migrando la base de datos y necesitamos ingresar los datos nuevamente hasta que queramos:
Hasta que el usuario quiera,se pide :
Tipo(dpto ,casa , quinta)solo estos tres tipos
Nombre
Saldo a favor o encontra
Lugar(CABA, PCIA, INTERIOR)
Cantidad de inquilinos(entre 1-5 para casa, 1-3 dpto, 4-10 quinta)
Informar SOLO SI HAY
a) el NOMBRE del del que más debe y vive en quita
b) el Lugar donde vive el que más saldo a favor tiene
c) el tipo de vivienda más elegido 
d) el promed
Informar SOLO SI HAY
a) el NOMBRE del del que más debe y vive en quita
b) el Lugar donde vive el que más saldo a favor tiene
c) el tipo de vivienda más elegido 
d) el promedio del saldo a favor que hay */

	/*//Base del parcial

	//declaro variables
	let respuesta;
	let nombre;
	let saldo;
	let lugar;
	let tipo;
	let inquilinos;
	let flagMaximo=true;
	let flagMinimo=true;;
	let deuda=0;
	let aFavor=0
	let enContra
	let contadorCasa=0;
	let contadorDpto=0;
	let contadorQuinta=0;
	let promedioSaldoAfavor
	do
	{
		do
		{
			tipo=prompt("Ingre si dpto,casa,quinta");
		}while(tipo !=`quinta` &&  tipo !=`casa` && tipo !=`dpto`);

		do
		{
			nombre=prompt("Ingrese un nombre")
		}while(isNaN(nombre));

		do
		{
			saldo=parseInt(prompt("su Saldo es a: 0+(favor) o -1(Encontra?"));
		}while( isNaN(saldo) || saldo < -50000 || saldo > 500000 );

		do
		{
			nombre=prompt("Ingrese un nombre")
		}while(isNaN(nombre));
		
		do
		{
			lugar=parseInt(prompt("Ingrese donde si caba,pcia o interior"));
		}while(lugar !="CABA" || lugar != "PCIA" || lugar !="INTERIOR");

		if(tipo == "quinta")
		{
			inquilinos
		}

		if(saldo>=0)
		{
			if(flagMaximo==true || aFavor>saldo)
			{
			aFavor=saldo;
			lugarAfavor= lugar
			flagMaximo=false;
			
			}
			contadorAfavor++;
			aFavor+=saldo
		}
		else
		{
			if(tipo=="quinta")
			{
				if(flagMinimo==true || enContra > saldo)
					{
						enContra=saldo
						saldoEnContra= nombre;
						flagMinimo=false;
					}	
				
			}
		}

		if(tipo=="casa")
		{
			contadorCasa++;
		}
		else if(tipo=="dpto")
		{
			contadorDpto++;
		}
		else
		{
			contadorQuinta++;
		}
		
		contador++
		
	respuesta = prompt ("Desea Ingresar otra dato (s/n)?");
	}while(respuesta == `s`);
	
	if(contadorCasa > contadorDpto && contadorCasa > contadorQuinta)
	{

	}
	else if(contadorDpto > contadorQuinta)
	{

	}
	else
	{
		
	}

	if(contadorAfavor > 0)
	{
		promedioSaldoAfavor = aFavor / contadorAfavor;
	}


	console.log("Adeduda" + deuda + "y vive en quinta")
		
	

	
	//Inicializo
	/*respuesta=`s`;
	contadorTemporadaAlta=0;
	contadorTemporadaBaja=0;
	acumuladorPesoGessel=0;
	
	while (respuesta == `s`)
	{
		nombre=prompt ("Ingrese un nombre");
		lugar=promt("Ingrese si quiere ir a: Puerto Madryn/Villa Gessel/Córdoba");
		while (lugar != "Puerto Madryn" && lugar != "Villa Gessel" && lugar !="Cordoba")
		{
			//valido datos ingresados para que no pare de insistir
			lugar = prompt("Ingrese si quiere ir a: Puerto Madryn/Villa Gessel/Cordoba");
		}

		temporada = prompt ("Ingrese temporada alta/baja")
		while (temporada != "alta" || temporada != "baja")
		{
			temporada = prompt ("eror : Ingrese temporada alta/baja")
		}
		do 
		{
			peso = parseInt(prompt("Ingrese su peso entre 0 y 200"));
		}while(peso < 0 || peso > 200);

		do{
		edad = parseInt(prompt("Ingre su edad"))
		}while(edad < 0 || edad > 120);

		//Logica-Calculos

		//A)
		if (temporada == "alta")
		{
			contadorTemporadaAlta++
		}
		else 
		{
			contadorTemporadaBaja++
		}

		//B)

		 if (lugar == "Villa Gessel")
		 {
			acumuladorPesoGessel = acumuladorPesoGessel + peso;/*Primero siempre el acumulador*/
		/* }

		respuesta = prompt ("Desea Ingresar otra estadia (s/n)?");//Pregunto para terminar el ciclo
	}
	
	document.write("cantidad de personas que viejan en temporada alta" + contadorTemporadaAlta + "<br>");
	document.write("cantidad de personas que viejan en temporada baja" + contadorTemporadaBaja + "<br>");
	document.write("El peso acumulado de todos los que viajan a villa Gessel es: " +acumuladorPesoGessel + "<br>");*/
//FIN DE LA FUNCIÓN

/* Nunca se valida por if */
	/*let numero;
	numero = 0;
	let mensaje;

	while( numero <= 9)
	{
		numero = numero + 1 ;	
		alert("numero " + numero);
		
	}*/

		/*peso = parseInt(prompt("Ingrese su peso entre 0 y 200"));
		while(peso < 0 || peso > 200)
		{
			peso = parseInt(prompt("ERROR: Ingrese peso entre 0 y 200"))
		}*/
		//Lo hacemos con do-While*/