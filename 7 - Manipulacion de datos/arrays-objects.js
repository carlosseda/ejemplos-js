//length -> devuelve la longitud (número de elementos) del array
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// console.log(numbers.length);

// push() -> añade un elemento al final del array (elemento a añadir)
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// numbers.push(10);
// console.log(numbers);

// pop() -> elimina el último elemento del array
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// numbers.pop();
// console.log(numbers);

// shift() -> elimina el primer elemento del array
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// numbers.shift();
// console.log(numbers);

// unshift() -> añade un elemento al principio del array (elemento a añadir)
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// numbers.unshift(0);
// console.log(numbers);

// splice() -> elimina un elemento del array (donde empieza, cuantos elementos)
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// numbers.splice(2,1);
// console.log(numbers);

// slice() -> crea un nuevo array a partir de otro array (donde empieza, donde termina)
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// let newNumbers = numbers.slice(2,5);
// console.log(newNumbers);

// indexOf() -> devuelve la posición de un elemento en el array (elemento a buscar)
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// console.log(numbers.indexOf(5));

// includes() -> devuelve true si el elemento está en el array (elemento a buscar)
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// console.log(numbers.includes(5));

// reverse() -> invierte el orden de los elementos del array 
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// console.log(numbers.reverse());

// sort() -> ordena los elementos del array (si no decimos nada, alfabéticamente)
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// console.log(numbers.sort());

// sort() -> ordena los elementos del array (por números) donde a es el primer elemento y b el segundo
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// console.log(numbers.sort((a,b) => a - b));

// join() -> convierte un array en un string (separador)
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// console.log(numbers.join(" - "));

// split() -> convierte un string en un array (separador)
// let string = "Tomate frito, 200 gramos";
// console.log(string.split(","));

// map() -> crea un nuevo array a partir de otro array
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// let newNumbers = numbers.map(number => {
//     return number * 2;
// });
// console.log(newNumbers);

// filter() -> crea un nuevo array a partir de otro array (la diferencia es que filter devuelve un array con los elementos que cumplen la condición)
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// let newNumbers = numbers.filter(number => {
//     return number > 5;
// });
// console.log(newNumbers);

// find() -> devuelve el primer elemento que cumple una condición
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// let newNumbers = numbers.find(number => {
//     return number > 5;
// });
// console.log(newNumbers);

// findIndex() -> devuelve la posición del primer elemento que cumple una condición
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// let newNumbers = numbers.findIndex(number => {
//     return number > 5;
// });
// console.log(newNumbers);

// let prices = [1,2,11,3,4,5,6,7,8,9];
// let total = 0

// prices.forEach(price => {
//   total += price
// })

// console.log(total)

// reduce() -> devuelve un valor a partir de un array (acumulador, elemento)
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// let newNumbers = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });
// console.log(newNumbers);

// every() -> devuelve true si todos los elementos cumplen una condición
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// let newNumbers = numbers.every(number => {
//     return number > 0;
// });
// console.log(newNumbers);

// some() -> devuelve true si al menos un elemento cumple una condición
// let numbers = [1,2,11,3,4,5,6,7,8,9];
// let newNumbers = numbers.some(number => {
//     return number > 5;
// });
// console.log(newNumbers);

// Bucles

// let numbers = [1,2,11,3,4,5,6,7,8,9];

// forEach() -> recorre un array
// numbers.forEach(number => {
//     console.log(number);
// });

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// for(let number of numbers){
//     console.log(number);
// }

// flat() -> devuelve un array con los elementos de un array anidado

// let array = [1,2,3, [4,5,6, [7,8,9]]];
// console.log(array.flat(2));

// Acceso a los valores e iteración de un objeto con foreach

// let colors = ['red', 'green', 'blue', 'orange']
// console.log(colors[0]);

// colors.forEach( (color, index) => {
//     console.log("soy el color " + color + " y mi posición en el array es la "  + index);
// });

// Acceso a los valores e iteración de un objeto con entries()
//Podemos usar destructuring para acceder a los valores del array
let user = {
    id: 5,
    name: "Juan",
    lastname: "Perez",
    age: "25",
    email: "juanperez@gmail.com"
};

const {name, age} = user;

console.log(name, age)

//  Object.entries(user).forEach(([key, value]) => {
//   console.log(key, value)
// });

// Object.entries(user).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });

// Filtración de datos 

// let users = [
//     {
//         name: "Carlos",
//         age: 23,
//         city: "Madrid",
//         cart: [
//             {
//                 productName: "Ordenador",
//                 price: 1000
//             }
//         ]
//     },
//     {
//         name: "Juan",
//         age: 34,
//         city: "Barcelona",
//         cart: [
//             {
//                 productName: "Libro",
//                 price: 10
//             },
//             {
//                 productName: "Ordenador",
//                 price: 1000
//             }
//         ]
//     },
//     {
//         name: "Laura",
//         age: 18,
//         city: "Madrid",
//         cart: [
//             {
//                 productName: "Libro",
//                 price: 10
//             },
//             {   
//                 productName: "Pantalla",
//                 price: 200
//             },
//             {
//                 productName: "Ordenador",
//                 price: 1000
//             }
//         ]
//     }
// ];

// Busca los usuarios que hayan comprado un ordenador
// let usersWithComputer = users.filter(user => {
//     return user.cart.some(product => {
//         return product.productName === "Libro";
//     });
// });
// console.log(usersWithComputer);

// Busca los usuarios que hayan comprado un ordenador y que vivan en Madrid
// let usersWithComputer = users.filter(user => {
//     return user.cart.some( product => {
//         return product.productName === "Ordenador";
//     }) && user.city === "Madrid";
// });
// console.log(usersWithComputer);

// Busca los usuarios que hayan comprado un ordenador y que vivan en Madrid y que tengan más de 30 años
// let usersWithComputer = users.filter(user => {
//     return user.cart.some(product => {
//         return product.product === "Ordenador";
//     }) && user.city === "Madrid" && user.age > 30;
// });
// console.log(usersWithComputer);

// Ordena los usuarios por edad
// a es el primer elemento y b el segundo
// Si la resta es positiva, a es mayor que b
// Si la resta es negativa, b es mayor que a
// Si la resta es 0, son iguales
// let usersSortedByAge = users.sort((a, b) => {
//     return a.age - b.age;
// });
// console.log(usersSortedByAge);

// Ordena los usuarios por edad de forma descendente
// let usersSortedByAge = users.sort((a, b) => {
//     return b.age - a.age;
// });
// console.log(usersSortedByAge);

// Ordena los usuarios por nombre
// a equivale al primer elemento y b al segundo que se está comparando
// Si a.name es mayor que b.name, devuelve un número positivo
// Si a.name es menor que b.name, devuelve un número negativo
// Si a.name es igual que b.name, devuelve 0

// let usersSortedByName = users.sort((a, b) => {
//     if(a.name > b.name){
//         return 1;
//     } else if(a.name < b.name){
//         return -1;
//     } else {
//         return 0;
//     }
// });
// console.log(usersSortedByName);
