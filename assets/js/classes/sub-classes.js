
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

class Heroe extends Persona{

    clan = 'Sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);

        this.clan = 'Liga de la Justicia'

    };

    quienSoy() {
        console.log( `soy ${ this.nombre } y hago parte de la: ${ this.clan }` );
        super.quienSoy();
    };

};

const prueba = new Heroe( 'Bruce Wayne', 'Batman', 'Yo soy Batman' );
// const prueba = new Heroe();
console.log( prueba );
prueba.quienSoy();




