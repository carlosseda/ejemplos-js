export default (() => {

  const age = document.querySelector("#age");
  const showAge = document.querySelector("#show-age");
  const plusAge = document.querySelector("#plus-age");

  showAge.addEventListener("click", () => {

    // Podemos acceder a los atributos de un elemento escribiendo el nombre del elemento, 
    // un punto y el nombre del atributo (por ejemplo, age.value). Otra forma de acceder a los atributos es
    // utilizando getAttribute y escribiendo entre parentesis el nombre del atributo 
    // (por ejemplo, age.getAttribute("value"). A pesar de que ambas formas son válidas,
    // es recomendable utilizar la primera forma siempre que sea posible.

    // Algunas de las propiedades más comunes de los elementos son:
    // innerHTML: el contenido HTML del elemento.
    // textContent: el contenido (texto) del elemento.
    // value: el valor del elemento.
    // classList: la lista de clases del elemento.
    // style: el estilo del elemento.
    // dataset: los atributos data- del elemento.
    // parentElement: el elemento padre del elemento.
    // children: los elementos hijos del elemento.
    // nextElementSibling: el elemento siguiente del elemento.
    // previousElementSibling: el elemento anterior del elemento.
    // offsetWidth: el ancho del elemento.
    // offsetHeight: el alto del elemento.
    // offsetTop: la distancia del elemento al borde superior de la página.
    // offsetLeft: la distancia del elemento al borde izquierdo de la página.

    // En este ejemplo tenemos la variable "age" que hace referencia al input que
    // tiene como id "age". Si queremos saber el valor de un input podemos 
    // escribir age.value. 
    console.log(age.value);

    // Un condicional es una estructura de control que nos permite ejecutar un código
    // si se cumple una condición. 

    // Un condicional empieza siempre con un if, y dentro de los parentesis escribimos
    // la condición que se tiene que cumplir, es decir, ser verdadera. 

    // Si queremos comprobar una igualdad dentro de la condición de un condiciónal usaremos ==
    // Si en cambio quisieramos comprobar si son diferentes usaremos != 
    // Si no queremos comprobar una igualdad sino una identidad (que son el mismo tipo de dato) usaremos ===
    // Si en cambio quisieramos comprobar si no son identicos usaremos !==
    
    // Podemos comprobar si una variable es mayor que otra usando >
    // menor que usando < 
    // mayor o igual que usando >= 
    // menor o igual que usando <=

    // Si sólo ponemos una variable dentro de los parentesis, javascript comprobará 
    // si el valor de la variable es true o false (ejemplo: if (age)). Esto significa
    // que si la variable tiene un valor diferente de 0, null, undefined, NaN o "", entonces
    // la condición se considerará verdadera. 

    // La negación de una condición se escribe con ! delante de la condición. Ejemplo: if (!age), es decir,
    // si el valor de la variable "age" es 0, null, undefined, NaN o "", entonces la condición se considerará
    // verdadera.

    // Finalemente podemos encadenar condiciones con && y || , siendo el primero equivalente a
    // "todas las condiciones tienen que ser verdaderas" y el segundo equivalente a "cualquiera
    // de las condiciones puede ser verdadera". Ejemplo: if (age && name), es decir, si el valor de la
    // variable "age" es diferente de 0, null, undefined, NaN o "", y el valor de la variable "name" es
    // diferente de 0, null, undefined, NaN o "", entonces la condición se considerará verdadera. Otro ejemplo:
    // if (age || name), es decir, si el valor de la variable "age" es diferente de 0, null, undefined, NaN o "",
    // o el valor de la variable "name" es diferente de 0, null, undefined, NaN o "", entonces la condición se
    // considerará verdadera.

    // En el siguiente caso tenemos que que el valor de la variable "age" sea menor que 18. 
    // Si queremos comprobar más de una condición podemos utilizar else if y meter 
    // entre parentesis una segunda condición, por último si queremos que si no se 
    // cumple ninguna condición se ejecute a su vez algo podemos utilizar else. 

    if (age.value < 18) {
      alert("Lo siento, eres demasiado pequeño para ver esta web");
    } else if (age.value >= 18) {
      alert("Bienvenido a la web");
    } else {
      alert("No tengo idea de qué es lo que has escrito");
    }
  });

  plusAge.addEventListener("click", () => {

    // Los datos cuando programamos pueden ser de diferentes tipos, por ejemplo
    // un string (texto), un number (números), un boolean (un 1 o un 0),
    // un array (un conjunto de datos), un null (un valor vacío),
    // o un undefined (un valor no definido), una función o un objeto. A esto le llamamos
    // tipos de datos. En javascript, los tipos de datos se identifican de la siguiente forma:

    // string: "hola", 'hola', `hola`
    // number: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
    // boolean: true, false
    // array: [1,2,3,4,5]
    // null: null
    // undefined: undefined
    // function: () => {}
    // object: {name: "Manuel", age: 30}

    // En javascript no tenemos que definir el tipo de dato que queremos utilizar, sino que
    // javascript lo detecta automáticamente. En cambio, en otros lenguajes de programación
    // como Typescript, tenemos que definir el tipo de dato que queremos utilizar. Por ejemplo,
    // en Typescript, si queremos definir una variable que sea un string, tenemos que escribir
    // "let name: string = "Manuel";". 

    // En el siguiente caso utilizamos la función parseInt para convertir el valor de 
    // age.value a número, y así poder despúes sumarle 1. Lo que escribimos 
    // dentro de los parentesis (age.value) es lo que se convertirá a número, ya que todo
    // atributo de un elemento HTML es un string. 

    // Por último, podemos dar un nuevo valor al atributo value del input
    // "age", escribiendo después del igual el nuevo valor que queramos que tenga.

    age.value = (parseInt(age.value) + 1);
  });
  
})();