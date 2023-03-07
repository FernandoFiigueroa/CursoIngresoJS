/* Figueroa Fernando DIV X*/
function mostrar()
{
    let i; 
    let u; 
    let k 
    let l; 
    let ñ; 
    let n; 
    let a; 
    let r; 
    let descuento; 
    let contador=0; 
    let respuesta; 
    let acumulador=0;
    let flag=true;

    do
    {

        do
        {
            i=prompt("")
        }while(!isNaN(nombre));
        do
        {
            i=prompt("")
        }while(o && 0);

        do
        {
            i=parseInt(prompt(""))
        }while(0 || 0);

        contador++
        respuesta = prompt("Deses seguir ingresando datos? S/N");
    }while( respuesta == "S");

    //CALCULOS
    //sin Descuentos
    precio= precio * contador;
    //Descuentos
        descuento = precioTotal * 25 / 100;
		descuento = precioTotal - descuento;
    //Promedio
        acumulador = acumulador + numeroIngresado;
        promedioPositivos=acumulador/contadorPositivos;
        numero=parseInt(prompt("Ingrese un numero"));
		//1) y 4)
		if (numero==0)
		{	
			contadorCeros++
		}
		//5)
		else if(numero<0)
		{
			sumaNegativos+=numero;
			contadorNegativos++;
		}
		//2) y 3)
		else
		{		
			sumaPositivos+=numero;
			contadorPositivos++;
		}
		//6)
		if(numero%2==0)
		{
			acumuladorPares++
		}
		respuesta=prompt("desea continuar? S para contiruar y no para cancelar");

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
    }


}//FIN DE LA FUNCIÓN