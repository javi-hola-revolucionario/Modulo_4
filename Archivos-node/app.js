// Node.js modulo llamado fs Files System, o sistema de archivos

// Importando el módulo fs
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
fs.readFile('.ejemplo.txt', 'utf-8', (error, contenido) => {

    if(error) {
        console.error('Ocurrio un error al leer el archivo: ', error)
        return; // Con return detenemos esta funcion
    }

    //Si no existio ningun error
    console.log('Contenido del archivo')
    console.log(contenido);
});

//Escribir un archivo si no existe, o cambiar el contenido de uno existente
fs.writeFile()

// Minuto 36.45