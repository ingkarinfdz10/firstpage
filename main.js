/* /**
 * Javascript is case sensitive
 * Variable, espacio reservado en memoria, que puede cambiar de contenido a lo largo de la ejecución
 * Crear variable con la palabra reservado:
 * let, var, const
 */

// ES5 
/* var nombre= 'Juan';
var precioProducto= 5;

// ES6 We cannot repeat variable names
let apellido= 'fernandez';

//String o cadena de texto */



// let  
/* let numero= 30;/* 
let numerob= 15;
const NUMEROC= 5;

let resultado= numero + numerob;
 */


//const

/* const url= 'www.coderhouse.com'; */

//Promot
/* let username= prompt('username: ');
console.log(username);
 */
//Alert
/* alert('Tienda online');
let username= prompt('username: ');
alert('Hola ' + username + ' ayuda?')
 */

/* let n1= parseInt(prompt("1: "));
let n2= parseInt(prompt("2: "));

alert(n1+n2);
 */

/* let numero = parseInt(prompt("Número: "));

if (numero > 1000) {
    alert("Número es mayor a 100");
}
else{
    alert("menor a 1000");

}

let cadena= prompt(" Cadena: ");

if (cadena==="Hola") {
    alert("Hola");
} else {
    alert("palabra diferente a Hola");
}
 */

/* let num= prompt(" numero ");

if (num > 10 || num < 50)
    {
        alert("número se encuentra entre 10 y 50");
    }
    
else {
    alert ("numero fuera de rango entre 10 y 50");
}


 */

/* let r = 0;

function sumar(a,b){
    /* console.log(a + b); */
    /* resultado = a + b; */
/* }

let a = Number(prompt("numero:"));
let b = Number(prompt("numero:"));

sumar(a,b);

/* console.log(resultado);

 */

/* function sumar(a,b){
    return a + b;
} */

/* console.log(sumar(5,5)); */

// console.log(sumar(4,5));

// Calculadora

// function calculadora(a,b,operacion) {
//     switch (operacion) {
//         case "+":
//             return a + b;            
//         case "-":
//             return a - b;            
//         case "*":
//             return a * b;            
//         case "/":
//             return a / b;            
//         default:
//             return 0;
//     }
// }

// let a = Number(prompt("numero: "));
// let b = Number(prompt("numero: ")); 
// let operacion = prompt("Operación: ");

// console.log(calculadora(a,b,operacion));

// precio de un producto
/* 
let precio = 1000;
let descuento = 100;

const suma = (a, b) => a + b;
const resta = (a ,b) => a - b;
const IVA = (precio) => precio * 0.16;

const imp = IVA (precio);
const subtotal = suma(precio,imp);
const total = resta(subtotal,descuento)
console.log(total); */


alert("Welcome to Mi tianguis");

let option = prompt("Opcion: ");

switch (option) {
    case "all":
        prompt("Welcome all section");
      break;
    case "men":      
        prompt("Welcome men section");
      break;
    case "women":
        prompt("Welcome women section");      
      break;
    case "jewellery":     
        prompt("Welcome jewellery section"); 
      break;
    case "electronics":      
        prompt("Welcome electronics section");
      break;
    default:      
  }
