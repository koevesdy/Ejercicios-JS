//imprime cual es el número mayor entre dos números

let a = prompt ("ingrese un numero", '');
a = parseInt(a);
let b = prompt ("ingrese otro numero", '');
b = parseInt(b);

if(a>b)
{
    console.log(a + " Es mayor que " + b )
}else if(a<b)
{
    console.log(b + " Es mayor que " + a )
}else 
{
    console.log("Los numeros son iguales" )
}