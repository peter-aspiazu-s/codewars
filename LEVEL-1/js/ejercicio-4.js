/**
 * Bienvenidos.

En este kata, se requiere que, dada una cadena, reemplace cada letra con su posición en el alfabeto.

Si algo en el texto no es una carta, ignóralo y no lo devuelvas.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
 */

// SOLUCIÓN RECOMENDADA
function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
}


// MI SOLUCIÓN
/*let abc = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

const alphabetPosition = (text) => {

    const arrText = text.toLowerCase().split('')

    const number = []

    arrText.forEach(item => number.push(abc.indexOf(item) + 1)) 

    const numberFilter = number.filter(item => item !== -1 && item !== 0)

    text = numberFilter.join(' ')

    return console.log(text);
}*/

alphabetPosition("The sunset sets at twelve o' clock.")