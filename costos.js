const COSTO_DESTINO = {
    Paris: 500,
    Londres: 400,
    "New York": 600,
    Madrid: 350,
    Tokyo: 700,
};

const COSTO_TRANSPORTE = {
    Tren: 100, 
    Autobus: 60,
    Avion: 200,
};

const COSTO_ALOJAMIENTO_POR_NOCHE = {
    Hotel: 90,
    Hostal: 30,
    Airbnb: 30,
}

// Funcion que va recibir los datos del viaje, la exportamos para usarla en otros archivos
export const calcularCosto = ({
    destino,
    transporte,
    alojamiento,
    noches = 0,
    personas = 1,
}) => {
    const baseDestino = COSTO_DESTINO[destino] ?? 0; // Si el destino no existe usamos 0 por defecto y asi con todos. 
    const extraTransporte = COSTO_TRANSPORTE[transporte] ?? 0;
    const costoNoche = COSTO_ALOJAMIENTO_POR_NOCHE[alojamiento] ?? 0;
    let subtotal = ( baseDestino + extraTransporte ) * personas; // Costo del destino + el transporte (multiplicado por el numero de personas)
    // Sumamos el costo del alojamiento 
    // noches * precio por noche
    subtotal += noches * costoNoche;

    const descuento = 
    // Usando operador ternario = 
    // condicion ? valor si es true : valor si es false
    personas >= 5 ? 0.12 : // 12% de descuento
    personas >= 3 ? 0.7 : // 7% de descuento
    0; // sin descuento

    // Aplicando el descuento al subtotal
    const total = subtotal * ( 1 - descuento);

    // Redondear el resultado
    return Math.round(total);
}

// Lo de abajo es lo mismo que de arriba pero lo de arriba es mas eficiente. 
/*
let descuento;

if(personas >= 5){
    descuento = 0.12;
} else if (personas >= 3){
    descuento = 0.07;
} else {
    descuento = 0;
}
*/