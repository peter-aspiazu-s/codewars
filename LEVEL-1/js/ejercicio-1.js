/*
Complete la solución para que devuelva true si el primer argumento (array) pasado termina con el segundo argumento (también un array).
*/ 


function solution(str, ending){
    // TODO: complete
    const lastCharacter1 = str.split("")[str.length - 1]
    const lastCharacter2 = ending.split("")[ending.length - 1]
    
    if(str != '' && ending != ''){
      if(str.includes(ending) && lastCharacter1 === lastCharacter2 ){
        console.log(true)
        return true
      }else {
        console.log(false)
        return false
      }
    } else {
      return true
    }
}

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false