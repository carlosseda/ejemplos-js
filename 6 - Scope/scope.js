export default (() => {

  // La diferencia entre var y let está en su alcance (scope)
  // var tiene un alcance global
  // let tiene un alcance local

  // Es decir, que si declaramos una variable con var dentro de un bloque de código,
  // esa variable será accesible desde fuera del bloque de código.

  // Si declaramos una variable con let dentro de un bloque de código,
  // esa variable sólo será accesible dentro del bloque de código.

  var globalVariable = "Variable global";

  if (true) {
    let localVariable = "Variable local";
  }

  console.log(globalVariable)
  
  // La siguiente línea dará un error porque la variable localVariable 
  // no existe fuera del bloque de código.
  console.log(localVariable)

})();