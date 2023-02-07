/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
Figueroa Fernando DIV X*/
function FahrenheitCentigrados () 
{
	let tempF;
    let tempC;
    

    tempF = parseFloat(document.getElementById("txtIdTemperatura").value);

    tempC = (tempF - 32) / 1.8;

    alert(`${tempF} Fahrenheit son ${tempC} centígrados`);
}

function CentigradosFahrenheit () 
{
	let tempF;
    let tempC;

    tempC = parseFloat(document.getElementById("txtIdTemperatura").value);

    tempF = tempC * 1.8 + 32;

    alert(`${tempC} Centigrados son ${tempF} Fahrenheit`);
}
