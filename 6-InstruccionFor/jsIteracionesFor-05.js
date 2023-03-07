function mostrar()
{
	let num;

	for (; ; )//Si no ingreso nada detro creo un bucle infito
	{
		num = parseInt(prompt("Ingrese un numero"));
		if(num == 9)
		{
			break;
		}//si se cumple esta condicion,cierro el bucle
		console.log("Usted ingreso " + num)
	}
}//FIN DE LA FUNCIÓN