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