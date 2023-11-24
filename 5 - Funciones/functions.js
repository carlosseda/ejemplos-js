export default (() => {

  const inputName = document.querySelector("#name");
  const inputAge = document.querySelector("#age");
  const helloButton = document.querySelector("#hello");
  const sendButton = document.querySelector("#send-button");

  //Una función es un bloque de código que se ejecuta cuando es llamado.

  //Generalmente podemos identificar una función si vemos unos paréntesis (). Y en visual studio code, 
  // si escribimos el nombre de una función veremos que se resalta en amarillo.

  //Para poder usar una función antes debe ser declarada, esto nos permite reutilizar el código de la función 
  // tantas veces como sea llamada. Principalmente hay dos formas de declarar una función:

  //1. Con la palabra reservada function y un nombre. Por ejemplo: function hello() {}. 
  //En este caso la función se llama "hello".

  //2. Con una variable que tenga como valor una función anónima. Por ejemplo: let hello = function() {}.
  // En este caso la función se llama "hello".

  //2.1 O en su versión más moderna, con una variable que tenga como valor una función anónima. 
  // Por ejemplo: let hello = () => {}.

  //Una función puede tener parámetros que son las palabras que van dentro de los paréntesis. 
  //Un parámetro es una variable local que sólo existe dentro de la función. Y que se le puede
  //dar valor cuando se llama a la función.

  //En este caso la función recibe un parámetro llamado "name".
  function hello(name) {
    alert("Hola " + name);
  }

  //En este caso la función se llama "validateAge" y recibe un parámetro llamado "age".
  let validateAge = age => {
    if (age < 18) {
      // Algunas funciones pueden devolver un valor a quien las llama. Normalmente
      // esto se hace con la palabra reservada return. En este caso la función
      // devuelve el valor false. 
      return false;
    } else {
      // En este caso la función devuelve el valor true.
      return true;
    }
  }

  helloButton.addEventListener("click", () => {
    // Para llamar a una función se usa el nombre de la función y entre paréntesis 
    // debemos escribir los parámetros que queramos enviar a la función si esta los acepta. En este caso
    // estamos llamando a la función "hello" y le estamos enviando el parámetro "Manuel". 
    hello("Manuel");
  });

  sendButton.addEventListener("click", () => {

    // En este caso almacenamos en la variable "validation" el resultado de la función "validateAge" 
    // que recibe como parámetro el valor del input "age". Si el valor
    // del input "age" es menor que 18, la función devolverá false y la variable "validation" 
    // tendrá el valor false. Si el valor del input "age" es mayor o igual que 18,
    // la función devolverá true y la variable "validation" tendrá el valor true.

    let validation = validateAge(inputAge.value);

    // Si la variable "validation" es true, entonces se ejecuta el código que está dentro del if.
    if (validation) {
      hello(inputName.value);
    } else {
      alert("Debes ser mayor de edad para enviar el formulario");
    }
  });

})();