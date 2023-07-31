
// Esto es una funcion, se sabe que es una funcion porque tiene sus parantesis
// Estas funciones tradicionales cuentan con un objeto implicito llamado arguments donde se guardan todos los
// Argumentos enviados a la funcion ejemplo, RETORNA un array
// Forma 1
function saludar() {
    console.log(arguments);
    console.log('Hola Mundo');
    return 'Vigoya'; // Toda funcion retorna undefined a menos que yo especifique lo contrario ejemplo
};

// Forma 2
// La misma funcon pero asignada a una variable
const saludar2 = function() {
    console.log('Hola Mundo forma 2');
};

// Otra forma es con un argumento, en este caso mi argumento es nombre
function saludar3(nombre) {
    console.log('Hola '+nombre)
};

// Forma 3, funcion de flecha y su sintaxis, basicamente si se envia un argumento los parentesis son opcionales
// pero es una buena practica dejar los parentesis
const saludarFlecha = (nombre) => {
    console.log('Esta es una funcion de '+nombre);
};

const retornoFuncion = saludar('Laura', 25, 'Bogota', 10+5);
console.log(retornoFuncion);
saludar2();
saludar3('Luis');
saludarFlecha('flecha');

// Esta seria una forma de tomar el resultado del return para que me muestre en pantalla
function sumar( a,b ){
    return a+b;
};
console.log(sumar(2,3));

// Forma con funcion de flecha
const sumar2 = (a,b) => {
    return a+b;
};
console.log(sumar2(6,4));

// Forma de resumir funcion de linea si solo UNICAMENTE vamos a trabajar con el return
const sumar3 = (a,b) => a+b;
console.log(sumar3(10,5));

function getAleatorio() {
    return Math.random();
};
console.log(getAleatorio());

// Forma de funcion de flecha resumida ya que solo trabajamos con el return
const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());

