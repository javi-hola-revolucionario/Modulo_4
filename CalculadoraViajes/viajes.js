// importar la funcion que calcula costos
import { calcularCosto} from "./costos.js";

const destinos = [];

export const registrarDestino = (destino, fecha, transporte, {
    alojamiento = "Hotel", noches = 0, personas = 1, }= {}
) => {
    // Crear un objeto que represente un viaje

    const nuevoViaje = {
        //guardamos los datos del viaje
        destino, 
        fecha, 
        transporte, 
        alojamiento,
        noches,
        personas,

        // Calcular el costo llamadao a nuestar funcion
        costo: calcularCosto({
            destino,
            transporte,
            alojamiento,
            noches,
            personas
        })
    };
    //agregamos el viaje al arreglo
    destinos.push(nuevoViaje);
    //devolvemos el objeto
    return nuevoViaje;
};

export const obtenerItinerario = () => {
    return [...destinos]
}

export const mostrarItinerario = () => {
    if (destinos.length === 0){
        console.log("No tienes viajes registrados");
        return;
    }

    destinos.forEach((viaje,idx) =>{
        console.log(`${idx +1}`)

        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Alojamiento: ${viaje.alojamiento}`);
        console.log(`Personas: ${viaje.peronas}`);

        console.log(`Costo Total: ${viaje.costo}`);
        console.log("----------------------------------");
    })
}