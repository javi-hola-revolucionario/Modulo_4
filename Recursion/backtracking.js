function generarSubconjuntos(nums){
    const restultado = [];

    function backtrack(inicio, camino){
        // Guardar una copia del camino actual
        restultado.push([...camino]);

        for(let i = inicio; i < nums.length; i++){
            // Elegir
            camino.push(nums[i]);

            //Explorar
            backtrack(i + 1, camino);

            // Deshacer la decision (retroceso)
            camino.pop();
        }
    }

    backtrack(0, []);
    return restultado;
}

console.log(generarSubconjuntos([1,2,3]));