
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en tota*/  

function mostrar()
{
	
	let dato;
    let marca;
    let fabricante;
	let respuesta;
	let unidades;
	let precio;
    let acumuladorAlcoholBarato=0;
	let precioAlcohol=0;
	let cantidadUnidades=0;
	let flagAlcochol=true;
	
	for(respuesta=0; respuesta<5;respuesta++)
	{
		do
		{
			dato=prompt("Va llevar barbijo,jabo o alcohol?");
		}while(dato != `barbijo` && dato != `jabon` && dato !=`alcohol`);

		do
		{
			precio=parseInt(prompt("Ingrese un numero entre 100 y 300 "));
		}while(precio <100 || precio > 300);

		do
		{
			unidades=parseInt(prompt("Ingrese su unidades"));
		}while(unidades <=0 || unidades >1000);

		do
		{
			dato=prompt("Que marca de alcohol va a llevar?.espadol/purell");
		}while(dato != `purell` && dato !=`espadol`);

		do
		{
			dato=prompt("ingrese fabricante.plusbell/dove");
		}while(dato != `plusbell` && dato !=`dove`);

      
		if(precio > 100 && precio<300)
		{
			acumuladorAlcoholBarato++
            precioAlcohol+=precio;
		}
        if(unidades>0 && unidades < 1000)
		{
            cantidadUnidades++
		}
        if(precio>precioAlcohol)
        {
            precioAlcohol=precio;
        }
        //A
        console.log(`El alcohol mas barato vale: ${precioAlcohol}<br> Con una unidad de ${cantidadUnidades} <br> y el Fabricante es : ${fabricante}`)
        console.log(``)
        console.log(``)
}

}
