let age = document.getElementById("age");
let showAge = document.getElementById("show-age");
let plusAge = document.getElementById("plus-age");

showAge.addEventListener("click", () => {
    
    // En cualquier momento podemos ver el valor de una variable escribiendo 
    // console.log y escribiendo dentro de los parentesis el nombre de la variable.
    // En este ejemplo tenemos la variable "age" que hace referencia al input que
    // tiene como id "age". Si queremos saber el valor de un input podemos 
    // escribir age.value. 
    console.log(age.value);

    // Un condicional empieza siempre con un if, y dentro de los parentesis escribimos
    // la condición que se tiene que cumplir. En este caso tenemos que que el valor
    // de la variable "age" sea menor que 18. Si queremos comprobar más de una condición
    // podemos utilizar else if y meter entre parentesis una segunda condición, por 
    // último si queremos que si no se cumple ninguna condición se ejecute a su vez
    // algo podemos utilizar else.  
    if(age.value < 18) {
        alert("Lo siento, eres demasiado pequeño para ver esta web");
    }else if(age.value >= 18) {
        alert("Bienvenido a la web");
    }else{
        alert("No tengo idea de qué es lo que has escrito");
    }
});

plusAge.addEventListener("click", () => {
    
    // En este caso tenemos una variable que hace referencia al input que tiene un 
    // atributo data-age, que podemos capturar su valor escribiendo dataset.age.
    console.log(plusAge.dataset.age);

    // Si queremos comprobar una igualdad dentro de la condición de un condiciónal
    // usaremos ==, si en cambio quisieramos comprobar si son diferentes usaremos != 
    if(plusAge.dataset.age == "plus") {
        // Los datos cuando programamos pueden ser de diferntes tipos, por ejemplo
        // un string (texto), un number (números), un boolean (un 1 o un 0),
        // un array (un conjunto de datos), un objeto, etc.  

        // En este caso estamos utilizamos parseInt para convertir el valor de 
        // age.value a número, y así poder despúes sumarle 1. Lo que escribamos 
        // dentro de los parentesis es lo que se convertirá a número. 

        // Por último podemos dar un nuevo valor a el atributo value de el input
        // "age", escribiendo después del igual el nuevo valor que queramos que tenga.
        age.value = (parseInt(age.value) + 1);
    }
});
