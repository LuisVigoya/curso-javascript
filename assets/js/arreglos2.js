
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo', juegos.length); // Con length se cuantos elementos tiene el arreglo

let primero = juegos[ 2-2 ];
let ultimo = juegos[ juegos.length - 1]; // Puedo hacer esta operaciones dentro de los arreglos

console.log({primero, ultimo});

// Con el forEach el va a ir por cada elemento y va a hacer algo
juegos.forEach( (elemento, indice, arr) => {  
    console.log({elemento, indice, arr});
});

// Con el push lo que hago es agregar un nuevo elemento a mi Array y este me retorna el nuevo tamaño de nuestro Array 
// RETORNA un nuemero
let nuevaLongitud = juegos.push('Halo');
console.log({nuevaLongitud, juegos});

// Lo mismo que el push con la diferencia que me agrega el nuevo elemento al inicio del Array
// RETORNA un nuemero
nuevaLongitud = juegos.unshift('Crash');
console.log({nuevaLongitud, juegos});

// Con pop elimino el ultimo elemento de mi arreglo
// RETORNA un String
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

// Con splice le indico que elementos borrar de mi arreglo primer parametro la posicion por la que inicio
// Segundo parametro cuantos elementos quiero borrar a partir del primer parametro
// RETORNA un nuevo arreglo
let pos = 1;
let juegosBorrados = juegos.splice( pos, 2);
console.log({juegosBorrados, juegos});

// Con esto buscamos en que posicion esta nuestro elemento en el arreglo
// RETORNA el index del elemento
// PRECAUCION PORQUE ES CaseSensitive
let metroidIndex = juegos.indexOf('Metroid'); 
console.log({metroidIndex});
