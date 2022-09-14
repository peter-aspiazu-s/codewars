/*
Complete la solución para que devuelva true si el primer argumento (array) pasado termina con el segundo argumento (también un array).
*/ 

// SOLUCION RECOMENDADA
function solution(str, ending){
    return str.endsWith(ending);
}

// ESTA SOLUCION ES DE ALGUIEN QUE NO CONOCE BIEN JAVASCRIPT
/*function solution(str, ending){
    // TODO: complete
    
    const arr1 = str.split('')
    const arr2 = arr1.slice(-ending.length)
    const arr3 = arr2.join('')
    
    if(str !== '' && ending !== ''){
      
      if(arr3 === ending){
        console.log(true)
        return true
      } else {
        console.log(false)
        return false
      }
      
    } else {
      return true
    }
    
  }*/

console.log( solution('abc', 'bc') ) // returns true
console.log( solution('abc', 'd') ) // returns false