// Arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoria

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa"},
    { nombre: "Laptop", precio: 800, categoria: "Electronica"},
    { nombre: "Libro", precio: 12, categoria: "Educacion"},
    { nombre: "Zapatos", precio: 50, categoria: "Ropa"},
    { nombre: "Celular", precio: 600, categoria: "Electronica"}
]


// Usa Filter() para obtener los productos que cuesten menos de $100
const aparatosElectronicos = productos.filter((n) => n.precio < 100 );
console.log("Productos menos de $100")
console.log(aparatosElectronicos);
console.log("-------------------------------");
// Usa sort() para obtener los productos alfabeticamente por su nombre
productos.sort((a,b) => a.nombre.localeCompare(b.nombre));
console.log("Productos ordenados alfabeticamente: ");
console.log(productos);
console.log("-------------------------------");
// Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos
const SoloNombres = productos.map((p) => p.nombre);
console.log("Nombre de los productos: ");
console.log(SoloNombres);
console.log("-------------------------------");
// Usa reduce
const suma = productos.reduce((acumulador, actual) => {
    return acumulador + actual.precio;
}, 0);
console.log("Suma total de los productos: ", suma);
console.log("-------------------------------");
// Usa some() 
const hayRopa = productos.some((p) => p.categoria === "Ropa");
console.log("¿Hay productos de ropa?", hayRopa);
console.log("-------------------------------");



