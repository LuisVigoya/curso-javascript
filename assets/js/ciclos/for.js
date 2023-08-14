
const heroes = ['Batman', 'Superman', 'Aquaman', 'Mujer Maravilla'];

console.error( 'For tradicional' );

// En el for tradicional contamos con 3 partes,inicializar variable, nuestra condicion y el incrementador
for( let i = 0; i < heroes.length; i++) {
    console.log( heroes[i] );
};

console.error( 'For in' );

// con el for in nos ahorramos nuestra conficion e incrementador ya que el in es quien determina esto solo debemos inicializar variable
for( let i in heroes ) {
    console.log( heroes[i] );
};

console.error( 'For of' );

// Al igual que el for in con la unica diferencia que solo requiero mi variable para accesar a mi arreglo
// Una buena practica es que cuando usamos un for of no lo hacemos con una variable llamada i sino con el nombre singular
// de e este caso nuestro arreglo es decir seria heroe
for( let heroe of heroes ) {
    console.log( heroe );
};
