function palabraMasLarga(text) {
    // TODO: Dividir el texto en palabras y almacenar en una variable
    // const words = ...

    const palabras = text.split(" "); 
    
    let PalabraMasLarga = "";

    for (let palabra of palabras) {
        if (palabra.length > PalabraMasLarga.length) {
            PalabraMasLarga = palabra;
        }
    }
    return PalabraMasLarga; 
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programacion increible para aprender";
// TODO: Llama a la funcion y muestra el resultado
console.log(palabraMasLarga(text)); // Resultado esperado: "Programacion"

