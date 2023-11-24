export default (() => {

  // En la siguiente línea estamos haciendo referencia a todos los elementos 
  // html que tienen la clase "square". Al haber varios elementos, estamos ante un
  // array, es decir, una variable que contiene varios elementos. Un array también 
  // se identifica en el código cuando vemos unos corchetes (ej: [1,2,3,4,5]).

  const squares = document.querySelectorAll(".square");

  // Podemos acceder a un elemento de un array utilizando su índice. El índice es la
  // posición del elemento en el array. Por ejemplo, el primer elemento de un array
  // tiene el índice 0, el segundo elemento tiene el índice 1, el tercer elemento tiene
  // el índice 2, etc. Para acceder a un elemento de un array escribimos el nombre del
  // array, y entre corchetes el índice del elemento que queremos acceder. Por ejemplo,
  // squares[0] accede al primer elemento del array squares.

  console.log(squares[0]);

  // Para recorrer todos los elementos del indice de un array necesitamos utilizar un bucle. 
  // Un bucle es una estructura de control que nos permite ejecutar un código varias veces.
  // El más fácil de usar es forEach. Este bucle recibe como parámetro una función que se ejecutará
  // por cada elemento del array. Esta función recibe como parámetro el elemento del array que se
  // está recorriendo en ese momento. Por ejemplo, squares.forEach(square => {}) recorre todos los
  // elementos del array squares, y en cada iteración del bucle la variable square hace referencia
  // al elemento del array que se está recorriendo en ese momento.

  squares.forEach(square => {

    square.addEventListener("click", () => {

      square.classList.toggle("active");
    });
  });

  // También podemos recorrer un array utilizando un bucle for. Este bucle recibe tres parámetros:
  // el primero es la variable que va a ir aumentando o disminuyendo en cada iteración del bucle.
  // El segundo es la condición que se tiene que cumplir para que el bucle se siga ejecutando.
  // Y el tercero es el incremento o decremento de la variable en cada iteración del bucle.

  // for(let i = 0; i < squares.length; i++){
  //     squares[i].addEventListener("click", (event) => {
  //         console.log(squares[i].dataset.number);
  //     });
  // }

  // También podemos recorrer un array utilizando un bucle for...of. Este bucle recorre todos los
  // elementos del array. En cada iteración del bucle la variable square hace referencia al elemento
  // del array que se está recorriendo en ese momento.

  // for( let square of squares){
  //     square.addEventListener("click", (event) => {
  //         console.log(square.dataset.number);
  //     });
  // }

  // También podemos recorrer un array utilizando un bucle while. Este bucle recibe como parámetro
  // la condición que se tiene que cumplir para que el bucle se siga ejecutando. En cada iteración
  // del bucle la variable i hace referencia al número de iteración del bucle.

  // let i = 0;
  // while(i < squares.length){
  //     squares[i].addEventListener("click", (event) => {
  //         console.log(squares[i].dataset.number);
  //     });
  //     i++;
  // }

  // El más recomendable es forEach, ya que es el más fácil de usar y el que menos errores puede	
  // provocar. Por eso mismo, siempre que sea posible, utilizaremos forEach para recorrer arrays.
  // Pero el más rápido es for, por lo que es más recomendable utilizar for cuando se recorren arrays
  // muy grandes.
})();