function binarySearch(arr, target, low = 0, high = arr.length - 1) { 
    
    console.log(`Buscando el numero ${target} entre los indices ${low} y ${high}`)
    // Caso base, donde ya no podamos buscar
    if(low > high) {
        console.log('No encontrado')
        return -1; // No lo encontro
    }

    // Paso 1. Dividir
    let mid = Math.floor((low + high) / 2);
    console.log(`Variable MID: ${mid}, valor: ${arr[mid]}`)

    // Paso 2. Conquistar
    if(arr[mid] === target){
        console.log(`Encontrado en el indice ${mid}`)
        return mid; // Si encontramos ese valor
    }

    // Paso 3. Seguir dividiendo
    if(arr[mid] > target) { 
        console.log(`Buscamos en la mitad izquierda`)
        return binarySearch(arr, target, low, mid -1);
    } else {
        console.log(`Buscamos en la mitad derecha`)
        return binarySearch(arr, target, mid, mid + 1, high)
    }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 6));