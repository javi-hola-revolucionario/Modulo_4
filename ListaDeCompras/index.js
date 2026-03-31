// Crear un arreglo vacio llamado listaDeCompras
let listaDeCompras = [];

// Funcion para agregar un producto al final de la lista

const agregarProducto = (producto) => {
    // Verificar si el producto ya existe
    if (listaDeCompras.includes(producto)) {
        console.log(`El producto "${producto}" ya esta en la lista!`);
    } else {
        // Agregar el producto al final del arreglo
        listaDeCompras.push(producto);
        console.log(`Producto agregado: ${producto}`);
    }
};

// Funcion para eliminar un producto de la lista 

const eliminarProducto = (producto) => {
    // Buscar el indice del producto
    const indice = listaDeCompras.indexOf(producto);
    if (indice !== -1) {
        // Elimiar el producto usando Splice
        listaDeCompras.splice(indice,1);
        console.log(`Producto eliminado: ${producto}`);
    } else {
        console.log(`El producto "${producto}" no se encuentra en la lista!`);
    }
};

// Funcion para mostrar productos de la lista
const mostrarProducto = (producto) => {
    console.log('Esta es la lista de compras: ');
    if (listaDeCompras.length === 0) {
        console.log('No hay nada en la lista')
        return; 
    } 
    listaDeCompras.forEach((producto, index) => {
    console.log(`${index +1}. ${producto} `); 
});
}

// Ejemplo de lista en uso
agregarProducto('jabon')
agregarProducto('jabon')
agregarProducto('elote')
agregarProducto('palomitas')
agregarProducto('celular')
eliminarProducto('elote')
mostrarProducto();