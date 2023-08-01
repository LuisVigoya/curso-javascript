
let a = 5;

if ( a >= 10 ) {  // si esto es verdadero ejecuta lo siguiente
    console.log('A es mayor o igual a 10');
} else { // si no fue verdadero ejecuta esto otro
    console.log('A es menor a 10');
};

// console.log('Fin de programa');

let hoy = new Date();
let dia = hoy.getDay(); // Funciona 0: Domingo, 1: Lunes, 2: Martes .... ETC

console.log(hoy);
console.log({dia});

// = un solo igual significa que se asigna el valor
// == dos igual es una evaluacion pero no tiene en cuenta el tipado
// === tres iguales es una evaluacion del valor y el tipado
if (dia === 2) {
    console.log('Hoy es Martes');
} else {
    console.log('Hoy no es Martes');
};

// EJERCICIO USANDO SOLO OBJETO O ARRAY COMO YO CREO 
// Objeto

let diaLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado', 
};

if (dia === 2) {
    console.log('Hoy es', diaLetras[2]);
}else {
    console.log('Hoy no es', diaLetras[2]);
};

// Usando un Array

let diaLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

if (dia === 2) {
    console.log('Hoy es', diaLetras2[2]);
} else {
    console.log('Hoy no es', diaLetras2[2]);
};

// Forma sencilla sin usar if
console.log('Hoy es:', diaLetras2[dia] || 'Dia de la semana no valido'); 
