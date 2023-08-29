
class Rectangulo {

    #area = 0; // Con esto hago que la propiedad este privada

    constructor( base = 0, altura = 0 ) {

        this.base   = base;
        this.altura = altura;

        this.#area = base * altura;

    };

    calcularArea() {
        console.log( this.#area * 2 );
    };

};

const rectangulo = new Rectangulo( 10, 15 );


console.log( rectangulo );


