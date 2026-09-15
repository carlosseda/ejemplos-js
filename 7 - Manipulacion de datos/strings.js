// Estas son las funciones que podemos usar para manipular strings

// toUpperCase() -> convierte el string a mayúsculas
// let string = "Hola";
// console.log(string.toUpperCase());

// toLowerCase() -> convierte el string a minúsculas
// let string = "Hola";
// console.log(string.toLowerCase());

// trim() -> elimina los espacios en blanco al principio y al final del string
// let string = " Hola ";
// console.log(string.trim());

// concat() -> concatena dos strings
// let sentence = "Hola, soy una frase";
// console.log(sentence.concat(" y soy una segunda frase"));

// length -> devuelve la longitud (número de carácteres) del string
// let sentence = "Hola, soy una frase";
// console.log(sentence.length);

// slice() -> devuelve una parte del string (desde dónde, hasta dónde)
// let sentence = "Hola, soy una frase";
// console.log(sentence.slice(0, 4));

// substring() -> devuelve una parte del string (desde dónde, hasta dónde)
// let sentence = "Hola, soy una frase";
// console.log(sentence.substring(0, 4));

// split() -> devuelve un array a partir de un string (separador)
// let sentence = "Hola, soy una frase";
// console.log(sentence.split(","));

// charAt() -> devuelve el carácter que se encuentra en la posición indicada (en qué posición empieza a contar)
// let sentence = "43901389H";
// console.log(sentence.charAt(8));

// endsWith() -> devuelve true si el string termina con el carácter indicado (palabra o letra)
// let sentence = "Hola, soy una frase";
// console.log(sentence.endsWith("frase"));

// includes() -> devuelve true si el string incluye el valor que le pasamos como parámetro (palabra o letra)
// let sentence = "Hola, soy una frase";
// console.log(sentence.includes("Hola, soy una frase"));

// indexOf() -> devuelve la posición de la primera aparición del carácter indicado (palabra o letra)
// let sentence = "Hola, soy una frase";
// console.log(sentence.indexOf("soy"));

// lastIndexOf() -> devuelve la posición de la última aparición del carácter indicado (palabra o letra)
// let sentence = "Hola, soy una frase";
// console.log(sentence.lastIndexOf("soy"));

// replace() -> reemplaza una palabra por otra
// let price = "5,6";
// console.log(price.replace(",", "."));

// replaceAll() -> reemplaza todas las apariciones de una palabra por otra
// let sentence = "Hola, soy una frase, soy otra cosa";
// console.log(sentence.replaceAll("soy", "no soy"));

// localeCompare() -> compara dos strings y devuelve un número (1, 0, -1)
// si el string es mayor que el parámetro devuelve 1, entendiendo por mayor que tiene más caracteres
// si el string es igual que el parámetro devuelve 0
// si el string es menor que el parámetro devuelve -1, entendiendo por menor que tiene menos caracteres
// let sentence = "Hola, soy una frase";
// console.log(sentence.localeCompare("Hola, soy una frase"));

// search() -> devuelve la posición de la primera aparición del carácter indicado (palabra o letra)
// let sentence = "Hola, soy una frase";
// console.log(sentence.search("soy"));

// match() -> devuelve un array con los resultados de la búsqueda, o null si no hay resultados (expresión regular)

// Comprobar si una palabra está en un string
// /leyes/g -> busca la palabra "leyes fundamentales" de forma global, es decir, que no se detenga en la primera coincidencia
// let text = "En la Constitución Española de 1978 se recogen las leyes fundamentales de España,";
// let regex = /leyes fundamentales/g;
// console.log(text.match(regex));

// Comprobar si un string sólo contiene palabras
// /^[a-zA-Z\s]+$/g -> busca todas las palabras que estén entre a y z, mayúsculas y minúsculas, y espacios en blanco (\s) 
// el $ indica que la búsqueda se detenga en el último carácter
// let name = "Juan Carlos";
// let regex = /^[a-zA-Z\s]+$/g;
// let validation = name.match(regex);

// Comprobar si hay números en el string
// /\d/ -> busca cualquier número
// let age = "Tengo 30 años" 
// let regex = /\d/g;
// console.log(age.match(regex));

// Comprobar si sólo hay números
// /^\d+$/ -> busca cualquier número, desde el principio de la cadena ^ hasta el final $, el + indica que puede haber más de un número
// let price = "1000";
// let regex = /^\d+$/g;
// console.log(price.match(regex));

// Comprobar si es un nombre de usuario tiene entre 4 y 16 caracteres
// {4, 16} -> busca entre 4 y 16 caracteres
// let username = "kaicen_formacion";
// let regex = /^[a-zA-Z0-9_-]{4,16}$/g;
// console.log(username.match(regex));

// Comprobar si es un número de teléfono	
// /^\d{9}$/g -> ^ indica que la búsqueda se inicie en el primer carácter, d{9}$ busca cualquier número de 9 dígitos
// let phone = "666666666";
// let regex = /^\d{9}$/g;
// console.log(phone.match(regex));

// Comprobar si es un email
// /\w+/ -> busca cualquier carácter alfanumérico
// /\w+@\w+/ -> busca cualquier palabra seguida de una arroba
// /\w+@\w+\.\w+/ -> busca cualquier palabra seguida de una arroba y de un punto
// let email = "kaicenformacion@gmail.com";
// let regex = /\w+@\w+\.\w+/g;
// console.log(email.match(regex));

// Comprobar si es una URL
// let url = "https://www.kaicenformacion.com";
// let regex = /^(http|https):\/\/\w+\.\w+\.\w+/g;
// console.log(url.match(regex));

// Comprobar si es un DNI
// /^\d{8}[a-zA-Z]$/ -> busca cualquier número de 8 dígitos seguido de una letra
// let dni = "12345678a";
// dni = dni.toUpperCase();
// let regex = /^\d{8}[A-Z]$/g;
// console.log(dni.match(regex));

// Comprobar si es un NIE
// /^[XYZ]\d{7}[a-zA-Z]$/ -> busca una letra seguida de 7 números y una letra
// let nie = "X1234567A";
// let regex = /^[XYZ]\d{7}[a-zA-Z]$/g;
// console.log(nie.match(regex));

// Comprobar si es un código postal
// /^\d{5}$/ -> busca cualquier número de 5 dígitos
// let postalCode = "07014";
// let regex = /^\d{5}$/g;
// console.log(postalCode.match(regex));

// Comprobar si es una fecha
// let date = "01/01/2020";
// let regex = /^\d{2}\/\d{2}\/\d{4}$/g;
// console.log(date.match(regex));

// Comprobar si es una hora
// let hour = "12:00";
// let regex = /^\d{2}:\d{2}$/g;
// console.log(hour.match(regex));

// Comprobar si es una contraseña
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/g -> ?=.* -> busca que haya al menos una letra minúscula, una mayúscula, un número y un carácter especial
// let password = "Kaicen1234";

// let regexFuerte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/g;
// let regexMedia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}/g;
// let regexBaja = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{8,}/g;
// let regexMuyBaja = /^[a-z]{8,}/g;

// console.log(password.match(regex));

// if (password.match(regexFuerte)) {
//     console.log("Contraseña fuerte");
// } else if (password.match(regexMedia)) {
//     console.log("Contraseña media");
// } else if (password.match(regexBaja)) {
//     console.log("Contraseña baja");
// } else if (password.match(regexMuyBaja)) {
//     console.log("Contraseña muy baja");
// } else {
//     console.log("Contraseña no válida");
// }

// Comprobar si es un número de tarjeta de crédito
// /^(\d{4}[- ]?){3}\d{4}$/ -> busca 4 números seguidos de un guión o un espacio, 3 veces, y 4 números al final

// Comprobar si es un número de IBAN
// /^ES\d{22}$/ -> busca ES seguido de 22 números
// let iban = "ES 12 3456 7890 123456789012";
// iban = iban.replace(/\s/g, "");
// console.log(iban);
// let regex = /^ES\d{22}$/g;

// console.log(iban.match(regex));






















