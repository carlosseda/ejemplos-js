export default (() => {

  // El DOM es la representación en memoria de un documento HTML. Y permite
  // acceder a los elementos del documento y modificarlos.
  // Para acceder a él podemos utilizar la variable global "document".
  // Podemos seleccionar elementos del DOM de diferentes formas:

  // getElementById: selecciona un elemento por su id
  console.log(document.getElementById("menu-button"));

  // querySelector: selecciona un elemento por su clase, id o etiqueta
  console.log(document.querySelector("#menu-button"));

  // querySelectorAll: selecciona todos los elementos que coincidan con la clase, id o etiqueta
  console.log(document.querySelectorAll(".menu-item"));

  // getElementsByClassName: selecciona todos los elementos que coincidan con la clase
  console.log(document.getElementsByClassName("menu-item"));

  // getElementsByTagName: selecciona todos los elementos que coincidan con la etiqueta
  console.log(document.getElementsByTagName("li"));

  // getElementsByName: selecciona todos los elementos que coincidan con el nombre
  console.log(document.getElementsByName("menu-item"));

  // La diferencia entre querySelector y getElementsByClassName es que querySelector
  // devuelve un array de elementos, mientras que getElementsByClassName devuelve un
  // objeto HTMLCollection. Para convertir un HTMLCollection en un array podemos utilizar
  // Array.from(). Además, querySelector nos permite usar funciones de array como forEach,
  // map, filter, etc. que HTMLCollection no permite. Por eso mismo es recomendable utilizar
  // querySelector y querySelectorAll siempre que sea posible.

})();