console.error( 'While' );

const carros = ['Ford', 'Mazda', 'Chevrolet', 'Toyota'];
let i = 0;

// El while se va a ejecutar siempre que su valor sea true
// para finalizar su ejecucion usamos un contador como el ejemplo i o un break para romper su ejecucion

// while ( i < carros.length ) {
//     console.log( carros[i] );
//     i++;
// };

// si el valor del if es false ya no se ejecuta
// valores que son considerados false por el while
// undefined
// null
// false

// En el ejemplo basicamente cuando i tenga valor 4 como no existe en el array arroja undefined y por ende detiene el ciclo while
// Usamos tambien break y continue que lo que hace es continuar con la ejecucion de while

while ( carros[i] ) {
    if ( i === 1 ) {
        // break;
        i++;
        continue;
    }
    console.log( carros[i] );
    i++;
};

console.error( 'Do While' );

// La unica difrenecia es que siempre se va a ejecutar el bloque del do hasta que la condicion del while deje de ser true
// Y siempre va a ejecutar la logica del do antes de verificar el while

let j = 0;

do{

    console.log( carros[j] );
    j++;

}while( carros[j] );

