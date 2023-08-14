
/*
    => Dia de la semana abrimos a las 11
    => Fines de semana abrimos a las 9
*/

// Entra al sitio web para verificar si esta abierto hoy...
const dia = 5; // 0:Domingo, 1:Lunes, 2:Martes....
const horaActual = 11;

let horaApertura;
let mensaje; // Esta abierto, Esta cerrado, hoy abrimos a las XX

// if ( dia === 0 || dia === 6) { // Forma 1 de hacerlo
// if ( [0,6].includes( dia ) ) { // Forma 2 usando metodo includes propio de arreglos simplifica el codigo un poco
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else {
//     console.log('Día entre semana');
//     horaApertura = 11;
// };

// Usando un oprador ternario su sintaxis seria asi para el ejemplo anterior
// Usamos la variable horaApertura con quien trabajamos y hacemos la condicion cuyo resultado si es true
// entonces el valor que tendra sera el siguiente al ? y si no es asi else sera despues de los : 
horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

// Nuestra evaluacion de la Hora

// if ( horaActual >= horaApertura ) {
//     mensaje = 'Está abierto';
// }else {
//     mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`;
// };

// Ejemplo mismo operador con lo que se
mensaje = ( horaActual >= horaApertura ) ? 'Está abierto' : 'Está cerrado';

console.log({horaApertura, mensaje});