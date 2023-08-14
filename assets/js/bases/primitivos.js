
let nombre = 'Luis';
console.log(nombre);

nombre = 'Andres';
console.log(nombre);

// COn typeof podre verificar el tipado de mi variable
console.log(typeof nombre);

nombre = 123;
console.log(typeof nombre);

let esConocido = true;
console.log(typeof esConocido, esConocido);

// En ambos casos va a ser de tipo Number
let edad = 24;
let edadDecimal = 24.0;
console.log(typeof edad, typeof edadDecimal);

// Es estandar en palabras compuestas usar camelCase
// Variable de tipo undefined
let conocimientoTecnico;
console.log(typeof conocimientoTecnico);

// Variable de tipo Null
let soyNull = null;
console.log(typeof soyNull);

// Variable de tipo Symbol permiten crear identificadores unicos en JavaScript
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(typeof symbol1);
console.log(symbol1 == symbol2);

