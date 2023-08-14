
const dia = new Date();
const hoy = dia.getDay();

// Switch es tipado si trabajo con numeros o string
// default me sirve para realizar eso si ningun caso se realizo
// break me sirve para romper el switch sin el seguiria ejecuntando todo el codigo
switch( hoy ) {

    case 0: 
        console.log( 'Domingo' );
        break;
    case 1: 
        console.log( 'Lunes' );
        break;
    case 2: 
        console.log( 'Martes' );
        break;
    default:
        console.log('No es Lunes, Martes o Domingo');

};



