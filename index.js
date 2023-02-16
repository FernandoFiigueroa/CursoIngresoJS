let a = 5;
let b = 34;
let c = 40;

prompt ("Ingrese A,B C")

if ( a<b && a<c){
    alert (`${a} es el numero mas chico`);
}else
//no comparo otra ves porque arriba ya compare,abajo solo comparo el que falto
{

    if (b>c) {
        alert(`${b} es el intermedio`)
    } 
    
    else{
        alert(`${c} es el mas grande`)
    }

} 


