/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let numero;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let contadorNegativos=0;
	let contadorPositivos=0;
	let contadorCeros=0;
	let diferencia;
	let acumuladorPares=0;
	let promedioPositivos;
	let promedioNegativos;
	

	do
	{
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
	
	}while(respuesta == `s`);//fin del while

	//5)
	if(contadorPositivos>0)
	{
		promedioPositivos=sumaPositivos/contadorPositivos;
	}
	if(contadorNegativos>0)
	{
		promedioNegativos=sumaNegativos/contadorNegativos;
	}
	
	//6)

	//7)
	diferencia = sumaPositivos + sumaNegativos;

	console.log(`Cantidad total de ceros :${contadorCeros}`);
	console.log(`La suma total de negativos es:  ${sumaNegativos}`);
	console.log(`La cantidad de numeros negativos es: ${contadorNegativos}`);
	console.log(`La suma total de positivos es: ${sumaPositivos}`);
	console.log(`La cantidad de numeros positivos es: ${contadorPositivos}`)
	console.log(`hay una cantidad de : ${acumuladorPares} numeros pares`);
	console.log(`el promedio de los positivos es ${promedioPositivos}`);
	console.log(`La diferencia es ${diferencia}`);
	console.log(`el promedio de los negativos es ${promedioNegativos}`);
	/*if(!isNaN(promedioNegativos))//! = si no es un numero
	{
		console.log(`el promedio de los negativos es ${promedioNegativos}`);
	}*/
}



	

	//document.write(`la suma de positivos es : ${sumaPositivos}`);
	//document.write("la suma de negativos es : " + sumaNegativos);
	/*document.write("la suma de negativos es :"+sumaNegativos);
	document.write("la suma de negativos es :"+sumaNegativos);
	document.write("la suma de negativos es :"+sumaNegativos);
	document.write("la suma de negativos es :"+sumaNegativos);*/ 
//FIN DE LA FUNCIÓN