/* Figueroa Fernando DIV X*/
function mostrar()
{
    let destino = document.getElementById("txtIdDestino").value;    

    switch(destino)
    {
        case "Bariloche":
        case "Ushuaia":
            alert("Hace Frio");
        break;
        case "Mar del plata":
        case "Cataratas":
            alert("Hace calor");
         break;
         default:
             alert("Sin informacion del clima");
         break;
        }
}//FIN DE LA FUNCIÓN