// Una variable es un espacio en memoria que almacena un valor.
// Hay dos formas de declarar una variable: con const o con let.
// const: se utiliza para declarar constantes, es decir, variables que no van a cambiar de valor.
// let: se utiliza para declarar variables que van a cambiar de valor.
// Por ejemplo, si el valor de una variable es un elemento HTML entonces usaremos const, ya que el elemento HTML 
// no va a cambiar. En cambio, si el valor de una variable es un número que va a ir aumentando o disminuyendo,
// entonces usaremos let.

// Para declarar una variable en javascript tenemos que escribir primero
// "let" o "const" y luego el nombre de la variable, el cual puede ser cualquiera que 
// queramos, pero no puede empezar por un numero, ni puede contener espacios. El
// nombre tiene que estar en camelCase, es decir, si el nombre de la variable tiene
// más de una palabra, la primera palabra empieza con minúscula y las siguientes
// palabras empiezan con mayúscula. Por ejemplo: "myVariableName".

export default (() => {

  // En este caso la variable "square" hace referencia a un elemento
  // HTML que se encuentra en el archivo index.html, que tiene una id "square".
  const square = document.querySelector("#square");

  console.log(square);

  // Un evento es una acción que se ejecuta cuando se produce un suceso. Podemos
  // establecer eventos en los elementos HTML. Por ejemplo, podemos establecer
  // un evento en un botón para que se ejecute una función cuando se haga click
  // en el botón.

  // Aquí una lista de los eventos disponibles
  // en javascript: https://www.w3schools.com/jsref/dom_obj_event.asp

  // Algúnos de los eventos más utilizados son:

  // click: se ejecuta cuando se hace click en el elemento.
  // mouseenter: se ejecuta cuando el cursor del ratón entra en el elemento.
  // mouseleave: se ejecuta cuando el cursor del ratón sale del elemento.
  // scroll: se ejecuta cuando se hace scroll en el elemento.
  // input: se ejecuta cuando se escribe en un input.
  // change: se ejecuta cuando cambia el valor de un input.
  // submit: se ejecuta cuando se envía un formulario.

  // En la siguiente linea se establece un evento que se ejecutara cada vez
  // que se haga click sobre el elemento square (es decir, el elemento
  // HTML que tiene una id "square" y que hemos guardado en una). 

  // addEventListener es una función que pueden utilizar todos los elementos
  // HTML. Esta función recibe dos parámetros: el primero es el evento que
  // queremos establecer, y el segundo es la función que se ejecutará cuando
  // se produzca el evento. En este caso, cuando se haga click en el elemento
  // square se ejecutará la función que hemos escrito entre las llaves.

  square.addEventListener("click", () => {
    // En la siguiente línea estamos haciendo referencia al elemento HTML, accediendo
    // a su lista de clases, y añadiendo o quitando la clase "active" al elemento mediante
    // la función toggle. Si el elemento no tiene la clase "active", entonces se la añade.
    // Si el elemento tiene la clase "active", entonces se la quita. Esto nos enseña que
    // podemos modificar el valor de un atributo de un elemento HTML utilizando javascript.

    square.classList.toggle("active");
  });

})();
