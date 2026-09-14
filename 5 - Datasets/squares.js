export default (() => {

  const squares = document.querySelectorAll(".square");
  const squaresRelateds = document.querySelectorAll(".square-related");

  squares.forEach(square => {

    square.addEventListener("click", () => {

      // Un dataset es un objeto que contiene todos los atributos "data-" de un elemento html.

      // Es útil para guardar información en un elemento html que no se va a mostrar en la página,
      // pero que va a ser útil para acceder a ella desde el código. Por ejemplo, podemos guardar
      // el color de un elemento en un atributo "data-color" y luego acceder a él desde el código. 

      // Para acceder a un atributo "data-" del html podemos utilizar el método getAttribute.
      // console.log(square.getAttribute("data-color")) o square.dataset.color siendo este último
      // preferible.

      console.log(square.dataset.color);

      square.classList.add("active");

      squaresRelateds.forEach(squareRelated => {

        if (square.dataset.color == squareRelated.dataset.color) {
          squareRelated.classList.add("active");
        }
      });

      // O de una forma más corta y directa:	

      // document.querySelectorAll(`[data-color="${square.dataset.color}"]`).forEach(squareRelated => {
      //   squareRelated.classList.add("active");
      // });

    });
  });

})();
