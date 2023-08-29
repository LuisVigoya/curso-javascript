
class Persona {

    static porObjeto( { nombre, apellido, pais } ) {
        return new Persona( nombre, apellido, pais );
    };

    constructor( nombre, apellido, pais ) {

        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;

    };

    get getInfo() {

        console.log( `info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }` );

    };

};

const nombre1   = 'Andrea',
      apellido1 = 'Arango',
      pais1     = 'Colombia';

const nombre2 = {
    nombre: 'Luis',
    apellido: 'Vigoya',
    pais: 'Colombia'
};

const persona1 = new Persona( nombre1, apellido1, pais1 );
const persona2 = Persona.porObjeto( nombre2 );

persona1.getInfo;
persona2.getInfo;


