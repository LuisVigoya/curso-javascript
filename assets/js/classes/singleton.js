
class Singleton {

    static instancia; // Undefined
    nombre = '';

    constructor( nombre = '' ) {

        if ( !!Singleton.instancia ) { // Si ya tengo la instancia ejecutame esto
            return Singleton.instancia;
        };

        Singleton.instancia = this; // Si aun no tengo la instancia
        this.nombre = nombre;

    };

};

const instancia1 = new Singleton( 'Ironman' );
const instancia2 = new Singleton( 'Spiderman' );

console.log( `Nombre de la instancia1 es: ${ instancia1.nombre }` );
console.log( `Nombre de la instancia2 es: ${ instancia2.nombre }` );


