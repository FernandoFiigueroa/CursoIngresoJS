/* Figueroa Fernando DIV X*/
function mostrar()
{
	let nota;
	const MINIMO = 1;
	const MAXIMO = 10;
	nota = Math.round(Math.random() * (MAXIMO - MINIMO) + MINIMO);

	if (nota >=9)
	{
		alert(`Excelente `);
	}	
	else 
	{
		if (nota > 3)	
		{
			 	alert(`Aprobo`);
		}
		else{

			{
				alert (`Vamos, la proxima se puede`);
			}
		}
	}

}//FIN DE LA FUNCIÓN