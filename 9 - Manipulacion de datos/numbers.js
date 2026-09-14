// Estas son las funciones que podemos usar para manipular números

// toFixed() -> devuelve el número con el número de decimales indicado
// let number = 3.14159265359;
// console.log(number.toFixed(2));

// toPrecision() -> devuelve el número con el número de dígitos indicado
// let number = "3.14159265359";
// console.log(number.toPrecision(2));

// toString() -> devuelve el número en formato string
// let number = 3.14159265359;
// console.log(number.toString()); 

// parseInt() -> devuelve el número entero
// let number = "3.14159265359";
// console.log(parseInt(number));

// Comprobamos si un número es entero
// let number = 3.14159265359;
// console.log(Number.isInteger(number));

// Comprobamos si un número es NaN
// let number = NaN;
// console.log(Number.isNaN(number));

// redondear un número
// let number = 3.14159265359;
// console.log(Math.round(number));

// redondear un número a dos decimales
// let number = 3.14159265359;
// console.log(Math.round(number * 100) / 100);

// redondear un número hacia abajo
// let number = 3.74159265359;
// console.log(Math.floor(number));

// redondear un número hacia arriba
// let number = 3.14159265359;
// console.log(Math.ceil(number));

// devuelve un número aleatorio entre 0 y el número indicado
// console.log(Math.floor(Math.random() * 100)); 

// toLocateString() -> devuelve el número con el formato de la localización (idioma, moneda, etc)

// let number = 123456789.12345;

// console.log(number.toLocaleString("es-ES", {style: "currency", currency: "EUR"}));

// Usa la moneda de inglaterra

// console.log(number.toLocaleString("en-GB", {style: "currency", currency: "GBP"}));

