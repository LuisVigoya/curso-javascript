

const luis = {

    nombre: 'Luis',
    edad: 24,
    imprimir () {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`); // para que me muestre el nombre debo hacerlo con this.
    }
};

const David = {

    nombre: 'David',
    edad: 25,
    imprimir () {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`); // para que me muestre el nombre debo hacerlo con this.
    }

};

// luis.imprimir();

function Persona( nombre, edad ) {

    console.log('Se esta ejecutando correctamente la funcion');

    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`); // para que me muestre el nombre debo hacerlo con this.
    }

};

const maria = new Persona( 'Maria', 20 );
const andrea = new Persona( 'Andrea', 27 );
// console.log( maria );
maria.imprimir();
andrea.imprimir();
