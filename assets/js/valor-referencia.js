// Aca estamos pasando los valores por valor y no por referencia
// Los primitivos de pasan por valor
let a = 10;
let b = a;
a = 30;

console.log({a, b});

// Los objetos se pasan por referencia
let juan = {nombre: 'Juan'};
let ana  = {...juan}; // uso el operador spret que significa separa los elementos
ana.nombre = 'Ana';

console.log({juan, ana});

const cambiaNombre = ( {...persona} ) => {  // Tambien uso el operador spret
    persona.nombre = 'Luis';
    return persona;
};

let peter = {nombre: 'Peter'};
let tony  = cambiaNombre( {...peter} ); // aca tambien uso el operador spret

console.log({peter, tony});

// Arreglos
// const frutas      = ['Manzana', 'Pera', 'Piña'];
// const otrasFrutas = [...frutas]; // Usamos operador spret para separar los arreglos
// const masFrutas   = otrasFrutas.slice(); // hace lo mismo que el operador spret ota forma de separar en este caso arreglos

// Aca vamos a medir el tiempo de ejecucion
const frutas      = ['Manzana', 'Pera', 'Piña'];

console.time('Slice'); // Con esto mido el tiempo de ejecucion y coloco una bandera
const masFrutas = frutas.slice();
console.timeEnd('Slice');

console.time('Spread');
const otrasFrutas = [...frutas];
console.timeEnd('Spread');

console.table({frutas, otrasFrutas, masFrutas});
