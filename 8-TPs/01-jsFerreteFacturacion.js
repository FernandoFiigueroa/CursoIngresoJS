/*1.	Para el departamento de facturación:
A.	Ingresar tres s de productos y mostrar la suma de los mismos.
B.	Ingresar tres s de productos y mostrar el promedio de los mismos.
C.	ingresar tres s de productos  y mostrar  final (más IVA 21%).
Figueroa Fernando DIV X
*/
function Sumar() 
{
	let sumaUno;
    let sumaDos;
    let sumaTres;
    let Suma;

    sumaUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    sumaDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    sumaTres=parseFloat(document.getElementById("txtIdPrecioTres").value);

    Suma = sumaUno + sumaDos + sumaTres;

    alert("El resultado de las sumas es: " + Suma);
}


function Promedio() 
{
    let promedioUno;
    let promedioDos;
    let promedioTres;
    let promedio;
    let resultado;

    promedioUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    promedioDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    promedioTres=parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    resultado = promedioUno + promedioDos + promedioTres;
    
    promedio = resultado / 3;
    
    alert("El promedio es: " + promedio);
}


function PrecioFinal() 
{

    let sumaUno;
    let sumaDos;
    let sumaTres;
    let suma;
    let importeFinal;
    let iva;

    sumaUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    sumaDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    sumaTres=parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = sumaUno + sumaDos + sumaTres;

    iva = suma * 21 / 100;

    importeFinal = suma + iva;

    alert("El Precio final es: " + importeFinal);
}
