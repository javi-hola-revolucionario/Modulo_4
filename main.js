// Operador nullish coalescing
let nombre = "Javi"; 

// Se activa ?? cuando la variable es null/undefined
let nombreFinal = nombre ?? "Invitado";
console.log(nombreFinal);

let edad;
let edadFinal = edad ?? 18;
console.log(edadFinal);

// Operador AND
let numero = 0; // Va tomar el valor como falso si utilizamos AND
let resultado = numero || 10;
console.log(resultado); 

// spread operator ... 
let numeros = [1,2,3];
let copia = [...numbers]

console.log(copia)

//poder copiar arreglos sin modificar el original
