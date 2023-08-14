// Un objeto literal cuenta con pares de valores que son una llave y su valor
let personaje = {
    nombre: 'Luis Vigoya',
    codeName: 'Luchito',
    vivo: true,
    edad: 24,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    vehiculos: ['Yamaha FZ25', 'Chevrolet Onix Turbo RS'],
    direccion: {
        barrio: 'Vegas de Santa Ana',
        localidad: 'Bosa',
        ciudad: 'Bogota',
    },
    'ultima-moto': 'Yamaha FZ25' // Para palabras compuestas puedo usar _ guin al piso, pero si no es posible y necesito usar 
    // Guion debo colocra esa llave dentro de comillas sensillas o dobles
};

console.log(personaje);
console.log('Nombre:', personaje.nombre); // Una forma para acceder al valor de ese objeto
console.log('Nombre:', personaje['nombre']); // Segunda forma para acceder al valor de ese objeto
console.log('Edad:', personaje.edad);
console.log('Coordenadas: ', personaje.coords); // forma de conocer el valor de una propiedad dentro de un objeto literal

console.log('Latitud:', personaje.coords.lat); // forma para poder ver una propiedad dentro de un objeto literal que se encuentra
// dentro de otro objeto literal

console.log('Vehiculo', personaje.vehiculos[1]); // Forma de conocer el valor de la propiedad
// almacenado dentro de un Array  dentro de un objeto literal con su index

console.log('Ultimo Vehiculo', personaje.vehiculos[personaje.vehiculos.length -1]); // Forma de conocer el valor de la propiedad
// almacenado dentro de un Array  dentro de un objeto literal de forma dinamica

console.log('Cantidad de vehiculos', personaje.vehiculos.length); // forma de saber la cantidad de elementos dentro
// de un Array que se encuentra dentro de un objeto literal

const x = 'vivo';
console.log('Vivo:', personaje[x]); // COn esto podemos usar una variable para conseguir el valor de una llave en nuestro arreglo
// PELIGRO es CaseSensitive

console.log('Ultima moto:', personaje['ultima-moto']); // Para obtener el valor de una llave que contiene una palabra compuesta
// debo llamar a esa propiedad accediendo al objeto literal y dentro de [] colocar la llave con sus respctivas comillas
// pueden ser sencillas o dobles

// Mas detalles

// Con esto borramos una propiedad de mi objeto literal
delete personaje.edad;
console.log({personaje});

// Aca convertimos mi objeto lieral en un array
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Con esto puedo agregar una nueva propiedad a mi Objeto Literal
personaje.casado = false;

// Con esto lo que hago es bloquear la eliminacion o modificadion de mi objeto literal en sus propiedades directas
// Pero si me perimte modificar los objetos o arreglos que esten dentro de mi otro objeto
Object.freeze(personaje);

personaje.direccion.ciudad = 'Medellin'; // Ejemplo de un objeto dentro de mi objeto
personaje.salario = 1000000000;
console.log(personaje);

// Con esto lo que hago es mostrar las propiedades que  conforman mi objeto, retorna un ARRAY
const propiedades = Object.getOwnPropertyNames(personaje);
console.log({propiedades});

// Si quiero que me muestre los valores de esas propiedades me retorna un array
const valores = Object.values(personaje);
console.log({valores});




