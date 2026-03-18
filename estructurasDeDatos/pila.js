//Crear una clase llamada Pila
class Pila {

    //Metodo Constructor
    constructor(){
        this.elementos = [];
    }

    // Metodo paraagregar un elemento (push)
    agregarElemento(valor){
        this.elementos.push(valor);
    }

    //Metodo para quitar el ultimo elemento (pop)
    quitarElemento(){
        return this.elementos.pop()
    }
    
    verUltimoElemento(){
        return this.elementos[this.elementos.length-1]
        // Ver el ultimo elemento sin quitarlo
    }

    // Metodo para saber si esta vacia
    estaVacia(){
        return this.elementos.length === 0;
    }

    //Mostrar los elementos
    mostrarPila(){
        return this.elementos;
    }
}

let pila = new Pila(); // Creando una instancia -> creando objeto
pila.agregarElemento(20);
pila.agregarElemento(10);
pila.agregarElemento(5);
pila.agregarElemento(48);

console.log(pila.mostrarPila());
console.log(pila.verUltimoElemento());
console.log(pila.quitarElemento());
console.log(pila.mostrarPila());










