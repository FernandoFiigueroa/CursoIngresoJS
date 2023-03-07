/* Figueroa Fernando DIV X
EJERCICIO-1:

1) De una Página se debe ingresar una cantidad indeterminada de interacciones diaria de usuarios, validando los siguientes datos:
nombre de usuario
edad
cantidad de descargas
tipo(“REGISTRADO” o “VIP”)
Informar:
a) El nombre del usuario de tipo “VIP” más joven.
b) La cantidad total de descargas del día.
c) Promedio total de descargas de los usuarios del tipo “REGISTRADO”.*/
function mostrar()
{
	let nombre; 
    let edad; 
    let descargas=0;
    let tipo; 
    let respuesta; 
    let flag=true;
	let edadMasJoven;
	let nombreMasJoven;
	let contadorRegistrado=0;
	let promedio=0;

    do
    {
		
        do
        {
            nombre=prompt("Ingrese su nombre de usuario");
        }while(!isNaN(nombre));

		do
        {
            edad=parseInt(prompt("Ingrese edad"));
        }while(edad <10 || edad >96);

        do
        {
            tipo=prompt("Ingrese tipo.REGISTRADO/VIP");
        }while(tipo!="REGISTRADO" && tipo!="VIP");

        descargas++;

		if(tipo == "VIP")
		{
			if(flag==true || edad<edadMasJoven)
			{
				edadMasJoven=edad;
				nombreMasJoven=nombre;
				document.write(`El nombre del usuario de tipo “VIP” más joven. ${nombreMasJoven}<br>`);
				flag=false;
			}
		}
		if(tipo =="REGISTRADO")
		{
			contadorRegistrado++
		}

        respuesta=prompt("Deses seguir ingresando datos? s/n");
    }while(respuesta=="s");


	document.write(`la cantidad total de descargas del dia es ${descargas}<br>`);
	document.write(`Promedio total de descargas de los usuarios del tipo “REGISTRADO” ${contadorRegistrado}`);
}
	
	
	
	
	
	
	
	/*//CALCULOS
    //sin Descuentos
    precio= precio * contador;
    //Descuentos
        descuento = precioTotal * 25 / 100;
		descuento = precioTotal - descuento;
    //Promedio
        acumulador = acumulador + numeroIngresado;
        promedioPositivos=acumulador/contadorPositivos;

        //IF
    if(contadorPositivos>0)
	{
		promedioPositivos=sumaPositivos/contadorPositivos;
	}
	if(contadorNegativos>0)
	{
		promedioNegativos=sumaNegativos/contadorNegativos;
	}

    //SWITCH,case

    switch(condicion)
    {
        case "variable":
        break;
    }*/


