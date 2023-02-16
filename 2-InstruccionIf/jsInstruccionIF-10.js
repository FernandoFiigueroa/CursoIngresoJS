/* Figueroa Fernando DIV X*/
function mostrar()
{
	let nota;
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
	}
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

}//FIN DE LA FUNCIÓN

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