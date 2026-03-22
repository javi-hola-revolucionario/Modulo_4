// Un arreglo puede tener cualquier tipo de dato en JS
// De preferencia usamos const
const listaDeCompras = ['leche', 'huevos', 'pan', 'tortillas']

// Se pueden mezclar tipos de datos, aunque no es recomendable
const mezcla = ['Ariel', 23, true, false, {rol: 'estudiante'}, ['sublista']]

// Imprimir nuestro arreglo para ver que tiene dentro
console.log(listaDeCompras);
console.log(mezcla);

//Aunque usemos const podemos modificar el contenido del arreglo
listaDeCompras.push('mantequilla');
// Lo que NO se puede es reasignar la referencia
console.log(listaDeCompras);

// Usar Let solo si se va a remplazar el arreglo completo
let numeros = [1,3,67,30];
numeros = [35,8,10,45];
console.log(numeros);

// Indice
console.log(mezcla[1]);
// Si accedemos a un elemento que no existe, nos entrega un undefined
console.log(mezcla[78]);
// Cuantos elementos tenemos
console.log(mezcla.length);
// Acceder al ultimo elemento 
console.log(mezcla[mezcla.length -1 ]);

const frutas = ['pera', 'manzana', 'sandia', 'papaya', 'melon'];
//Forma tradicional de recorrer arreglos
for(let i = 0; i < frutas.length; i++){
    console.log('Indice: ',i+1, 'Valor: ', frutas[i]);
}

frutas.unshift('cereza'); // Agregar al inicio de mi arreglo
frutas.unshift('lulo');
console.log(frutas);

frutas.shift(); // Quitar el elemento del inicio
console.log(frutas);

frutas.pop(); // Quitar el ultimo elemento
console.log(frutas);

const usuario = [
    {id: 1, nombre: 'Javier'},
    {id: 2, nombre: 'Maria'},
    {id: 3, nombre: 'Carlos'},
    {id: 4, nombre: 'Ana'},
    {id: 5, nombre: 'Luis'},
]

// El metodo find() sirve para encontrar el primer elemento que cumpla con una condicion
// Usarlo cuando necesitemos una sola cosa
const encontrado = usuario.find((u) => u.id ==2);
console.log(encontrado);

// El metodo filter() crea un arreglo con los elementos que cumplen una condicion
// No modifica el arreglo original

const pares = numeros.filter((n) => n % 2 === 0);
console.log('Original: ', numeros);
console.log('Copia de pares: ', pares);

// El metodo map() crea un nuevo arreglo con los resultados de la funcion aplicada a cada elemento del arreglo original

const precios = [100,200,300,400,500];
const preciosConIVA = precios.map((p) => {
    const iva = p * 0.16;
    const total = p + iva;
    return total; // Esto se guarda en el nuevo arreglo 
});

console.log('Original: ', precios);
console.log('Precios con IVA: ', preciosConIVA);

// El metodo forEach() ejectuta una funcion para cada elemento del arreglo, pero no devuelve un nuevo arreglo, es solo para efectos secundarios

const apellidos = ['Gomez', 'Perez', 'Serrano', 'Garcia'];

apellidos.forEach((apellido, index) => {
    console.log('Posicion: ',index, ' Apellido', apellido);
});

// El metodo some() nos va decir si existe AL MENOS un elemento que cumpla con la condicion
const preciosNuevos = apellidos.some((p) => p === 'Serrano');
console.log(preciosNuevos);

// El metodo every() es si todos cumplen 
// El metodo sort() ordena (y normalmente muta)

