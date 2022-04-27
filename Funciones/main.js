let form = document.getElementById("contact-form");
let inputName = document.getElementById("name");
let inputAge = document.getElementById("age");
let helloButton = document.getElementById("hello");
let byeButton = document.getElementById("bye");
let sendButton = document.getElementById("send-button");

//Podemos identificar una función si vemos unos paréntesis. 

//Para poder usar una función antes debe ser declarada, esto nos permite reutilizar el código de la función tantas veces como
//sea llamada:

//1. Con la palabra reservada function y un nombre. En este caso la función se llama "hello". 

//Una función puede tener parámetros que son las palabras que van dentro de los paréntesis. En este caso la función recibe un parámetro llamado "name".
function hello(name) {
    alert("Hola " + name );
}

//2. También podemos declarar una función mediante una variable que tenga como valor una función anónima. En este caso la función se llama "validateAge" y 
// recibe un parámetro llamado "age".
let validateAge = (age) => {

    // Normalmente una función devolverá un resultado. En este caso la función devolverá un booleano.
    if(age < 18) {
        return false;
    } else {
        return true;
    }
}

helloButton.addEventListener("click", () => {
    // Para llamar a una función se usa el nombre de la función y entre paréntesis debemos escribir los parámetros que queramos enviar a la función. En este caso
    // estamos llamando a la función "hello" y le estamos enviando el parámetro "Manuel". 

    hello("Manuel");
});

sendButton.addEventListener("click", () => {

    // En este caso almacenamos en la variable "validation" el resultado de la función "validateAge" que recibe como parámetro el valor del input "age". Si el valor
    // del input "age" es menor que 18, la función devolverá false y la variable "validation" tendrá el valor false. Si el valor del input "age" es mayor o igual que 18,
    // la función devolverá true y la variable "validation" tendrá el valor true.
    let validation = validateAge(inputAge.value);

    // Si la variable "validation" es true, entonces se ejecuta el código que está dentro del if.
    if(validation) {

        hello(inputName.value);

    }else{
        
        alert("Debes ser mayor de edad para enviar el formulario");
    }
 
});

