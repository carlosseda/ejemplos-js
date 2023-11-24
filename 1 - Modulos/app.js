// Cuando trabajamos con módulos, cada archivo es un módulo. Y para poder utilizar
// un módulo en otro módulo, tenemos que exportarlo. Para exportar un módulo, tenemos
// que escribir "export default" y luego escribir una función que se cargará por defecto
// cuando importemos el módulo. En nuestro html llamaremos a un único archivo javascript, que
// será el archivo principal de nuestra aplicación. En este caso, el archivo principal
// se llama "app.js". Y en este archivo principal importaremos todos los módulos que
// necesitemos.

// Para poder utilizar un módulo externo debemos importarlo en nuestro
// archivo principal. En este caso, el archivo principal es "app.js". 

// Si el módulo que queremos importar está en la misma carpeta que el archivo
// principal, entonces debemos escribir "./" y luego el nombre del archivo.
// En este caso el archivo se llama "menu-button.js". Y como el archivo
// tiene una función que se carga por defecto, podemos llamar a la función
// sin necesidad de escribir el nombre de la función.
import './menu-button.js';

// Si el módulo que queremos importar tiene una función que no se carga por defecto,
// entonces debemos escribir el nombre de la función que queremos importar entre llaves. Si hubiera
// más de una función, entonces debemos separarlas por comas {funcion1, funcion2, funcion3}.
import {renderTabs} from './tabs.js';

// Y una vez importado el módulo, podemos llamar a la función que hemos importado.
renderTabs();

// Preferiblemente, utilizaremos la primera opción, por lo que nuestros módulos
// tendrán generalmente una función que se cargará por defecto.
