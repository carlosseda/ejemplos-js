export default (() => {

  // En la siguiente línea estamos haciendo referencia a todos los elementos 
  // html que tienen la clase "square". Al haber varios elementos, estamos ante un
  // array, es decir, una variable que contiene varios elementos. Un array también 
  // se identifica en el código cuando vemos unos corchetes (ej: [1,2,3,4,5]).

  let squares = document.querySelectorAll(".square");

  // Para recorrer un array necesitamos utilizar un bucle forEach. En este caso, "squares"
  // es el array que queremos recorrer, y "square" es cada uno de los elementos del array al 
  // que aplicamos una función.

  squares.forEach(square => {

    square.addEventListener("click", (event) => {

      console.log(square.parentElement);

      square.classList.toggle("active");
    });
  });

  // let squares = document.querySelectorAll(".square");

  // for(let i = 0; i < squares.length; i++){
  //     squares[i].addEventListener("click", (event) => {
  //         console.log(squares[i].dataset.number);
  //     });
  // }

  // for( let square of squares){
  //     square.addEventListener("click", (event) => {
  //         console.log(square.dataset.number);
  //     });
  // }
})();