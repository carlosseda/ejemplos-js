// En la siguiente línea estamos haciendo referencia a todos los elementos 
// html que tienen la clase "square". Al haber varios elementos, estamos ante un
// array, es decir, una variable que contiene varios elementos.
let squares = document.querySelectorAll(".square");

// Para recorrer un array necesitamos utilizar un bucle forEach. En este caso, "squares"
// es el array que queremos recorres, y "square" es cada uno de los elementos del array al 
// que aplicamos una función.

squares.forEach(square => {
    
    square.addEventListener("click", () => {
        square.classList.add("active"); 
    });
});


