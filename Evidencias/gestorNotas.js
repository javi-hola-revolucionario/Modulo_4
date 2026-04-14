const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
  let notas = [];
  if (fs.existsSync(filePath)) {
    // PISTA: Aquí debes leer las notas existentes antes de agregar la nueva.
    // COMPLETAR: Usa fs.readFileSync para leer el archivo.
     const datos = fs.readFileSync(filePath, 'utf-8');
    notas = JSON.parse(datos);
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  // PISTA: Ahora debes sobrescribir el archivo con las notas actualizadas.
   fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  // COMPLETAR: Usa fs.writeFileSync para guardar las notas.
  console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {

const data = fs.readFileSync(filePath, 'utf-8');
    const notas = data ? JSON.parse(data) : [];

    if (notas.length === 0) {
      console.log('No hay notas guardadas.');
      return;
    }

     notas.forEach((nota, index) => {
      console.log(`\nNota ${index + 1}`);
      console.log(`Título: ${nota.titulo}`);
      console.log(`Contenido: ${nota.contenido}`);
    });

  } else {
    console.log('No hay notas guardadas.');
  }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
     const data = fs.readFileSync(filePath, 'utf-8');
    const notas = data ? JSON.parse(data) : [];

    const notasRestantes = notas.filter(nota => nota.titulo !== titulo);

    fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
    
    console.log(`Nota con título "${titulo}" eliminada.`);
  } else {
    console.log('No hay notas para eliminar.');
  }
}

// Ejecución de ejemplo
agregarNota('Compras', 'Comprar leche y pan.');
listarNotas();
eliminarNota('Compras');

// ### Pistas para Resolver el Proyecto ###
// Formato del archivo `notas.json`:
[
  { "titulo": "Compras", "contenido": "Comprar leche y pan." },
  { "titulo": "Trabajo", "contenido": "Terminar reporte semanal." }
]

// #### Operaciones clave: ###
// 1. Para leer las notas existentes:
const data = fs.readFileSync(filePath, 'utf8');
const notas = JSON.parse(data);

// 2. Para guardar las notas actualizadas:
fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));

// 3. Filtrar notas para eliminar:
const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);