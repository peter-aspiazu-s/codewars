/*
Complete la solución para que devuelva true si el primer argumento (array) pasado termina con el segundo argumento (también un array).
*/ 

/*
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

// definimos el primer array de prueba, con los últimos caracteres
// terminando iguales, debe devolver true
let array1 = ['abc', 'bc']
// definimos el segundo array de prueba, con los últimos caracteres
// terminando diferentes, debe devolver false
let array2 = ['abc', 'd']

// defino la funcion que recibira un argumento de tipo array
const arraySolution = (arr = []) => {

    // almaceno el primer elemento del array en una variable
    const stringArr1 = arr[0]
    // almaceno el segundo elemento del array en una variable
    const stringArr2 = arr[1]
    
    // corto el string y accedo al ultimo caracter en ambos casos 
    const lastCharacter1 = stringArr1.split("")[stringArr1.length - 1]
    const lastCharacter2 = stringArr2.split("")[stringArr2.length - 1]

    // creo la condición para comparar si son estrictamente iguales
    // que devuelva true y si no false
    if(lastCharacter1 === lastCharacter2){
        return true;
    } else {
        return false;
    }
}

console.log(arraySolution(array1))
console.log(arraySolution(array2))