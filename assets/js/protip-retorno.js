
// Funcion con retorno de un objeto literal 
function crearPersona(nombre, apellido) {
    return {
        Nombre: nombre,
        Apellido: apellido,
    };
};

const persona = crearPersona('Luis', 'Vigoya');
console.log(persona);
// Forma para poder acceder a mi objeto literal
console.log(persona.Nombre);

// Forma 2 protip
function crearPersona2(nombre, apellido) {
    return {
        nombre,   // Si el nombre de mis variables es el mismo que el de mis argumentos puedo omitir 
        apellido, // las variables: con sus dos puntos
    };
};

const persona2 = crearPersona2('Luis', 'Gomez');
console.log(persona2);

// Funcion de flecha y un objeto literal que debera ir dentro de parentesis
const crearPersona3 = (nombre, apellido) => ({Nombre: nombre,Apellido: apellido,});

const persona3 = crearPersona3('Laura', 'Espinosa');
console.log(persona3);

// Manejando argumentos con funcion de flecha 
// Para que me funcione tengo que enviar los puntos ... REST para que me almacene todos los argumentos en un array y me los muestre
// CONDICIONES: despues del parametro REST no pueden venir mas argumentos
const imprimeArgunmentos = (...args) => {
    console.log(args)
};
imprimeArgunmentos(24, true, false, 'Fernanda', 'Hola');

// Forma para asignar los valores a unas variables con array que es lo que me retorna mi funcion
const imprimeArgunmentos2 = (...args) => {
    console.log(args)
    return args;
};
const [edad, vivo, casado, nombre, saludo] = imprimeArgunmentos2(24, true, false, 'Fernanda', 'Hola');
console.log({edad, vivo, casado, nombre, saludo});

// Forma para imprimir mis resultados de un objeto literal
const {apellido: nuevoApellido} = crearPersona2('Luis', 'Gomez');
console.log({nuevoApellido});

// Modo tradicional aterior
function imprimeArgunmentos3() {
    console.log(arguments);
};
imprimeArgunmentos3(24, true, 'Luis');

// ProTip destructuracion de objetos
let luis = {
    nombre: 'Luis Vigoya',
    codeName: 'Luchito',
    vivo: true,
    edad: 24,
    vehiculos: ['Yamaha FZ25', 'Chevrolet Onix Turbo RS'],
};

// Forma 1 no conozco las llaves de mi objeto literal solo sus valores
const imprimePropiedades = ( personaje ) => {
    console.log(personaje.nombre);
    console.log(personaje.codeName);
    console.log(personaje.vivo);
    console.log(personaje.edad);
    console.log(personaje.vehiculos);
};

// Forma 2 desestructuracion
// Si por algun motivo un argumneto viene sin valor puedo enviarle uno por defecto y es colocando un = al lado del argumento
// Ejemplo edad solo servira si edad llega sin un valor de lo conrario mostrara el valor asignado previamente
const imprimePropiedades2= ( {nombre, codeName, vivo, edad = 0, vehiculos} ) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({vehiculos});
};

imprimePropiedades(luis);
imprimePropiedades2(luis);

