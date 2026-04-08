// Node.js modulo llamado fs Files System, o sistema de archivos

// Importando el modulo 
const fs = required ('fs')

//guardar ruta en una constante 
const rutaArchivo = './ejemplo.txt'

//verificar si un archivo existe 

if(fs.existSync(rutaArchivo)){
    //Solo si el archivo existe
    console.log('El archivo existe');
} else {
    console.log('El archivo no existe');
}

// Me quede en minuto 20