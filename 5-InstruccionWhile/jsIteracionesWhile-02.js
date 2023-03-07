/*2) Una casa de computación debe realizar el ingreso de los datos de los productos que tiene a la venta, de acuerdo al
siguiente detalle:
● Tipo de PC (“DESKTOP” o “LAPTOP”)
● Marca (“DELL”, “HP”, “ACER”)
● Modelo
● Precio (No puede ser menor a 100.000 pesos)

Informar:
a) El precio de la PC más cara.
b) La cantidad total de PC de tipo LAPTOP cuya marca es DELL.
c) El promedio total del precio.
Pedir datos por prompt y mostrar la información por document.write.*/
function mostrar()
{
	let precio
	let respuesta;
	let pc;
	let marca;
	let modelo;
	let acumuladorPc=0;
	let pcMasCara=0;
	let flag=true;
	let acumuladorPrecio=0
	let acumulador=0;
	let promedio=0;//Inicializo para que cuando la muestre no me quede en undefin ed
	let acumuladorPrecioTotal=0;

	do
	{
		do
		{
			pc=prompt("Ingrese tipo de PC DESKTOP o LAPTOP");
		}while(pc != `DESKTOP` && pc != `LAPTOP`);

		do
		{
			marca=prompt("Ingrese su marca: DELL/HP/ACER");
		}while(marca != `DELL` && marca != `HP` && marca !="ACER");
			
		modelo=prompt("Ingrese su modelo:");

		do
		{
			precio=parseInt(prompt("Ingrese un precio mayor a 100000 "));
		}while(isNaN(precio) || precio < 100000 || precio > 2000000);


		if(flag==true || precio>pcMasCara)
		{
			pcMasCara=precio;
			//acumuladorPrecio++;
			flag=false; 
		}

		if( tipo==`LAPTOP` && marca==`DELL`)
		{
				acumuladorPc++;	
		}

		acumulador++;
		acumuladorPrecioTotal+=precio;

		respuesta=prompt("Desea Ingresar otra dato? s/n");//Pregunto para terminar el ciclo
		
	}while(respuesta=`s`);
	
	if(acumulador > 0)
	{
		promedio=acumuladorPrecioTotal/acumulador;
	}

	console.log(`el precio de la pc mas cara es: ${pcMasCara}`);
	console.log(`El total de pc de tipo laptop y de marca dell son: ${acumuladorPc}`)
	console.log(`Promedio total de pc : ${promedio.toFixed}`);

}


//FIN DE LA FUNCIÓN
/*let numero;
	numero = 10;
	

	while( numero>=1)
	{
		alert(" numero " + numero);
		
		numero = numero - 1 ;	
	}*/
