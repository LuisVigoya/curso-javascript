
// Esto significa que nuestro arreglo tendra 10 elementos
// const arr = new Array(10);
// Lo mismo que arriba pero sin elementos
// const arr2 = [];
// console.log(arr, arr2);

let videoJuegos = ['Mario 3', 'MegaMan', 'Halo'];
console.log('Videojuegos:', {videoJuegos});

console.log(videoJuegos[0]);

let arregloCosas = [ // Puedo tener varias cosas en un arreglo
    true, // Booleano
    123, // Numero
    'Luis', // Cadena
    1+2, // Operacion
    function(){}, // Funcion
    () => {}, // Funcio de flecha
    { a: 1 }, // Objeto
    ['X', 'MegaMan', 'Zero', 'Dr. Light'], // Otro arreglo
];

//console.log({arregloCosas});
console.log(arregloCosas[7][3]); // Me sirve para llamar un elemento de un arreglo dentro de otro arreglo



