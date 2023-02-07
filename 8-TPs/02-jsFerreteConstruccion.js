/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
Figueroa Fernando DIV X*/

function Rectangulo() 
{
    let largo;
    let ancho;
    let perimetro;
    let alambre;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    perimetro = (largo + ancho) * 2;

    alambre = perimetro * 3;

     alert(`Se necesitan comprar ${alambre} metros de alambre`);

}
function Circulo() 
{
    let perimetro;
    let radio;
    let alambre;
    const PI = 3.14;

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    perimetro = 2 * PI * radio;

    alambre = perimetro *3;

    alert (`Se necesitan comprar ${alambre} metro de alambre`);

}

function Materiales() 
{
    let largo;
    let ancho;
    let area;
    let cemento;
    let cal ;
    const CEMENTO_X_METRO = 2;
    const CAL_X_METRO = 3;

    largo = parseFloat(document.getElementById("txtIdLargo").value);

    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    area = largo * ancho;

    cemento = area * CEMENTO_X_METRO;

    cal = area * CAL_X_METRO;

    alert (`Para un contrapiso de ${area}m2 necesito comprar ${cemento} bolsas de cemento y ${cal} bolsas de cal `)

}