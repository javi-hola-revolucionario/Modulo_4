// Node.js modulo llamado fs Files System, o sistema de archivos

// Importando el módulo fs
const { error} = require('console'); // Forma tradicional de importar modulo
const fs = require('fs');
const path = require('path');

// Verificando si un archivo existe
const filePath = path.join(__dirname, './example.txt');

if (fs.existsSync(filePath)) { // Indica que nuestra funcion es sincrona
  console.log('El archivo existe.');
} else {
  console.log('El archivo no existe.');
}

// Leer el contenido
fs.readFile('./Archivos-node/ejemplo.txt', 'utf-8', (error, contenido) => {

    if(error) {
        console.error('Ocurrio un error al leer el archivo: ', error)
        return; // Con return detenemos esta funcion
    }

    //Si no existio ningun error
    console.log('--------------Contenido del archivo---------------')
    console.log(contenido);
});

//Escribir un archivo si no existe, o cambiar el contenido de uno existente
fs.writeFile(filePath, 'Hola, Node.js esto fue escrito desde app.js', (error) => {

    if(error) {
        console.error('Ocurrio un error al ESCRIBIR el archivo: ', error)
        return; // Con return detenemos esta funcion
    }

    //Si no existio ningun error
    console.log('-------------El archivo fue escrito correctamente-------------')
    
});

// Agregar contenido

fs.appendFile(filePath, '\nEsta es una nueva linea que se agrego a nuestro archivo!', (error) => {
  
  if(error) {
        console.error('Ocurrio un error al AGREGAR CONTENIDO el archivo: ', error)
        return; // Con return detenemos esta funcion
    }

    //Si no existio ningun error
    console.log('-------------El contenido fue agregado correctamente-------------')
    
});

// Esta funcion es util para: logs, bitacoras, historiales o algun archivo que crezca con el tiempo. 

//  Eliminar un archivo

fs.unlink(filePath, (error) => {

    if(error) {
        console.error('Ocurrio un error al ELIMINAR el archivo: ', error)
        return; // Con return detenemos esta funcion
    }

    //Si no existio ningun error
    console.log('-------------El contenido fue ELIMINADO correctamente-------------')
    

})