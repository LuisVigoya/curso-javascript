
class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + '-> Instancias';
    };

    static mensaje() {
        console.log( 'Hola a todos esto es un mensaje de un metodo estatico' );
    };

    nombre = '';
    codigo = '';
    frase  = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;

    };

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    };

    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es: ${ this.comida }`;
    };

    quienSoy() {
        console.log( `Soy ${ this.nombre } y mi identidad es ${ this.codigo }` );
    };

    mifrase() {
        this.quienSoy();
        console.log( `${ this.codigo } dice: ${ this.frase }` );
    };

};

const prueba = new Persona( 'Bruce Wayne', 'Batman', 'Yo soy Batman' );
const prueba2 = new Persona( 'Jhon Constantine', 'Constantine', 'Al demonio' );

// console.log( prueba2 );

prueba.mifrase();

prueba.setComidaFavorita = 'Pizza';

console.log( prueba );
console.log( prueba.getComidaFavorita );

console.log( Persona.conteo );
Persona.mensaje();





