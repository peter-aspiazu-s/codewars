/**
 * Escriba una función que acepte una matriz de 10 enteros (entre 0 y 9),
 * que devuelva una cadena de esos números en forma de número de teléfono.
 */

// SOLUCIÓN 100% RECOMENDADA

 function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx";
    
    for(let i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }

    console.log(format)
    
    return format;
  }

  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  
  // SOLUCION ALTAMENTE RECOMENDADA
//   function createPhoneNumber(numbers){
//       numbers = numbers.join('');
//       return '(' + numbers.substring(0, 3) + ') ' 
//       + numbers.substring(3, 6) 
//       + '-' 
//       + numbers.substring(6);
//     }
    
//     createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// ESTA SOLUCION NO ES RECOMENDADA

// const createPhoneNumber = async( numbers ) => {

//     // almacenar los numeros en una variable
//     let arrayNumbers = numbers
    
//     // separar primeros 3 numeros
//     const numCode = arrayNumbers.slice(0, 3)
//     // eliminar los 3 elementos del arreglo
//     arrayNumbers = arrayNumbers.splice(3)
//     // separar los siguientes 3 numeros
//     const numSecondaryGroup = arrayNumbers.slice(0, 3)
//     // eliminar los 3 elementos del arreglo
//     arrayNumbers = arrayNumbers.splice(3)

//     // convertir los numeros en string
//     const numPrimaryString = numCode.join('')
//     const numSecondaryString = numSecondaryGroup.join('')
//     const numFinallyString = arrayNumbers.join('')

//     console.log(`(${numPrimaryString}) ${numSecondaryString}-${numFinallyString}`)

//     return `(${numPrimaryString}) ${numSecondaryString}-${numFinallyString}`
    
// }

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


// ESTO ES UN EXPERIMENTO JEJE


// const createPhoneNumber = async( numbers ) => {
    
//     // separar numeros en grupos
//     const numCode = numbers.filter(num => num < 4 && num !== 0)
//     const numSob = numbers.filter(num => num > 3)
//     const cero = numbers.filter(num => num === 0)

//     // organizar de forma ascendente los numeros
//     const numCodeOrder = numCode.sort(function(a, b){return a - b})
//     let numSobOrder = numSob.sort(function(a, b){return a - b})

//     // separar los primeros 3 numeros del arreglo que no sea el de 1, 2 y 3
//     let numPrimaryGroup = numSobOrder.slice(0, 3);
    
//     // eliminar los 3 elementos del arreglo
//     numSobOrder = numSobOrder.splice(3)
    
    
//     // crear un nuevo array con los numeros que no sean 1, 2 y 3
//     for(let i = 0; i < cero.length; i++){
//         numSobOrder.push(cero[i])
//     }
    
//     let numSecondaryGroup = numSobOrder;


//     // convertir los numeros en string
//     const numPrimaryString = numCodeOrder.join('')
//     const numSecondaryString = numPrimaryGroup.join('')
//     const numFinallyString = numSecondaryGroup.join('')

//     console.log(`(${numPrimaryString}) ${numSecondaryString}-${numFinallyString}`)

//     return `(${numPrimaryString}) ${numSecondaryString}-${numFinallyString}`
    
// }

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"