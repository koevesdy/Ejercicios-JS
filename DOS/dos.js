//define cual es el mayor de tres números dados

let a = prompt ("ingrese un numero", '0');
a = parseInt(a);
let b = prompt ("ingrese otro numero", '0');
b = parseInt(b);
let c = prompt ("ingrese otro numero", '0');
c = parseInt(c);

if((a>b && a>c) || (a>b && a==c) || (a>b && a==c))
{
    console.log("El numero mayor es " + a )
}else if((b>a && b>c) || (a==b && b>c) || (b>a && b==c))
{
    console.log("El numero mayor es " + b )
}else if ((c>a && c>b) || (c==a&& c>b) || (c>a && c==b))
{
    console.log("El numero mayor es " + c )
}else
{
    console.log("Los numeros son iguales" )
}

