// NOT NEGACION
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
};

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
};

console.warn('Not o la negacion');
console.log(true); // Imprime en consola true
console.log(!true); // Imprime en consola su opuesto puesto que ! lo niega es decir false
console.log(!false); // Imprime en consola su opuesto puesto que ! lo niega es decir true
console.log(!regresaFalse());

// AND
console.warn('And'); // Resultado true, si todos los valores son verdaderos
console.log(true && true); // El resultado es true
console.log(true && false); // El resultado es false

console.log('======================');
console.log(regresaFalse() && regresaTrue()); // omite las funcion regresatrue ya que la primera condicion dio false
console.log(regresaTrue() && regresaFalse()); // Caso contrario ya que primera condicion regresa true

// otro ejemplo es el siguiente
// funciona y es muy comun ver este codigo indica que si 
// se cumple la primera condicion ejecute la segunda
regresaTrue() && regresaFalse(); 
console.log('4 Condiciones', true && true && true && false); // regresa false

// OR
console.warn('OR');

// Es basicamente lo opuesto del AND con que una condicion sea verdadera devuelve verdadero
console.log(false || true);
console.log(regresaFalse() || regresaTrue()); // Caso contrario ya que primera condicion regresa false sigue la operacion hasta true
console.log(regresaTrue() || regresaFalse()); // omite las funcion regresafalse ya que la primera condicion dio true
console.log('4 Condiciones', true || true || true || false); // regresa true

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

// Ejemplo 1 con primera condicion true valor final 150 es el que imprime siempre el ultimo si es un valor y no una condicion
const a1 = true && 'Hola Mundo' && 150;
console.log({a1});

// Ejemplo 2 con primera condicion false valor final false es el que imprime
const a2 = false && 'Hola Mundo' && 150;
console.log({a2});

// Ejemplo 3 con OR y AND
const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; // retorna el ya no soy falso y no llega a true
// Porque ya encontro un valor antes del true 
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true; // retorna true ya que estaba antes 
// del valor ya no soy falso de nuevo
console.log({a3, a4, a5});

