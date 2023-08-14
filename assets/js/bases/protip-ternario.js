// Forma 1 tradicional
const elMayor = ( a, b ) => {
    return ( a > b ) ? a : b;
};

// forma simplificada posible ya que solo tenemos un return
const elMayor2 = ( a, b ) => ( a > b ) ? a : b;

// Otra funcion de fecla con un booleano din evaluacion
const tieneMembresia = ( miembro ) => ( miembro ) ? '2 Dólares' : '10 Dólares';


console.log( elMayor( 30, 20 ) );
console.log( elMayor2( 15, 10 ) );
console.log( tieneMembresia( false ) );

const amigo = true;
const amigos = [
    'Fernanda',
    'Andres',
    'Manuel',
    ( amigo ) ? 'Carlos' : 'Harrinson'
];

console.log( amigos );

// Ejemplo con varias condiciones en un operador ternario
const nota = 100;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log( {nota, grado} );




