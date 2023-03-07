function mostrar()
{
    let carga
    let usuario
    
    for (carga = 0 ; carga <=5 ; carga++)
    {
        usuario = prompt("Ingrese si va a a llevar barbijo,Jabon o alcohol")
        while(usuario != "barbijo" && usuario != "jabon" && usuario != "alcohol")
        {
            alert("La validacion no es correcta.Por favor vuelva a ingresar los datos");
            usuario = prompt("Ingrese si va a a llevar barbijo,Jabon o alcohol")
        }
    }
}
