export default (() => {

  // La diferencia entre var y let es que var crea una variable global o local en una función sin importar el ámbito del bloque.

  var globalVariable = "Variable global";

  if (true) {
    let localVariable = "Variable local";
  }

  console.log(globalVariable)
  console.log(localVariable)

})();