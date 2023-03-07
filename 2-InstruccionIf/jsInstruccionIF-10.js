/* Figueroa Fernando DIV X
De una compra debes ingresar una cantidad de 15 productos, 
validando los siguientes datos:
nombre de producto, precio, unidades, tipo(minorista o mayorista)
a)informar el precio total de la compra.
b)el nombre del producto más caro de tipo minorista
c)el nombre del producto con menos unidades*/
function mostrar()
{

	let contador;
	let entrada;
	let nombre;
	let precio;
	let unidades
	let cliente
	let contadorDeCompras
	let precioTotal
	let flag=true;
	let producto=0
	let productoMasCaro

	for(entrada=0;entrada<2; entrada++)
	{
		do
		{
			nombre=prompt("Ingrese el nombre del producto");
		}while(nombre != "leche" && nombre!="yogurt");

		do
		{	
			precio = parseInt(prompt("Ingrese el precio"))
		}while(precio < 0 || precio > 500);

		do{
			unidades=parseInt(prompt("Ingrese unidad"))
		}while(unidades < 1 || unidades > 50 )

		do{
			cliente=prompt("Ingrese si mayorista o minorista")
		}while(unidades != "minorista" || cliente != "minorista");

		contadorDeCompras++

		if(contadorDeCompras >0 )
		{
			precioTotal =precioTotal + (precio * unidades);
		}

		console.log("precio" + precioTotal);

		if(cliente == "minorista" && ( flag == true || precio>producto))
		{
			producto=precio
			productoMasCaro=nombre;
			flag = false;
		}
		

		
	}

























}
/*	let nota;
	const MINIMO = 1;
	const MAXIMO = 10;
	nota = Math.round(Math.random() * (MAXIMO - MINIMO) + MINIMO);

	if (nota >=9)
	{
		alert(`Excelente ${nota}`);
	}	
	else 
	{
		if (nota > 3)	
		{
			 	alert(`Aprobo ${nota}`);
		}
		else{

			{
				alert (`Vamos, la proxima se puede ${nota}`);
			}
		}
	}*/
	//codigo de la otra punta
	/* if(nota<4){
		alert("vamos")
	}
	else
	{
		if(nota<9)
		{
			alert(aprobado)
		}
		else
		{
			excelente
		}
	} */

//FIN DE LA FUNCIÓN

//otro forma pero mala:
/* if (nota >= 9 ) || nota ==10){
	alert("excelente")
}
else {
	if(nota>=4){
		alert("aprobado")
	}
	else
	{
		alert("vamo,la proxima se puede")
	}
}*/