/*
[2,1,5,4,1,3,2]
Quitar el numero que ya no esta
Agregar el numero nuevo
 */

function obtenerSumaMaxima(arregloNumeros, tamVentana){
    // Validamos que no este vacia
    if(tamVentana > arregloNumeros.length){
        return null;
    }

    let sumaActualdeVentana = 0;

    console.log('---Primera Ventana -----')

    //1 Calculamos la suma de la primera ventana 
    for(let indice = 0; indice < tamVentana;indice++) {
        sumaActualdeVentana += arregloNumeros[indice];
        console.log(`sumando ${arregloNumeros[indice]} --> suma actual: ${sumaActualdeVentana}`);
    }

    let sumaMaximaEncontrada = sumaActualdeVentana;

    // 2 Nos movemos a la otra ventana
    for (let indice = tamVentana; indice < arregloNumeros.length; indice++){ // Deslizaqmos la ventana:
        let numeroQueSale = arregloNumeros [indice - tamVentana]; // quitamos el numero que ya no esta
        let numeroQueEntra = arregloNumeros [indice]; // y agregamos el nuevo numero

        console.log('--- Movemos la ventana ---')
        console.log(`Numero que sale: ${numeroQueSale}`)
        console.log(`Numero que sale: ${numeroQueEntra}`)

    //Ajustamos la suma
    sumaActualdeVentana = sumaActualdeVentana- - numeroQueSale + numeroQueEntra;

        console.log(`Nueva suma actual: ${sumaActualdeVentana}`)

    // Comparamos con el maximo
    if(sumaActualdeVentana > sumaMaximaEncontrada){
        sumaMaximaEncontrada = sumaActualdeVentana
        console.log(`Nuevo numero maximo encontrado: ${sumaMaximaEncontrada}`)
        } else {
            console.log(`El maximo encontrado sigue siento: ${sumaMaximaEncontrada}`)
        }
        console.log("_____________")
    }
    return sumaMaximaEncontrada;
}

let visitasPorMinuto = [10 , 23, 2, 49, 50, 3, 56, 2, 5]
let maxTrafico = obtenerSumaMaxima(visitasPorMinuto,3);
console.log(maxTrafico)