/**
 * Se le dará un número y deberá devolverlo como una cadena en forma expandida. Por ejemplo:
 * expandedForm(12); // Should return '10 + 2'
 * expandedForm(42); // Should return '40 + 2'
 * expandedForm(70304); // Should return '70000 + 300 + 4'
 */


// ESTA SOLUCIÓN NO ES MÍA NO LOGRÉ COMPLETAR ESTE EJERCICIO
 const expandedForm = (num) => {

    // primero convierte el numero a string y luego a un arreglo, después usa el map para acceder al valor, al indice y al arreglo, luego retorna el valor concatenando el 0 en string y como es string lo puede repetir
    // pero lo repite por la longitud del array menos el indice y menos 1 para que de justo, luego ese array lo filtra y busca el valor entero que sean diferente de 0
    // y ya por último lo convierten a string pero separado por un + que cabron el que lo hizo.
    
   return num.toString().split('').map((el,index,array)=>{return el + "0".repeat(array.length - index -1)}).filter(el=>parseInt(el)!=0).join(" + ");

  }

  // SOLUCIONES DE OTRAS PERSONAS
  /*const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");*/

    // const expandedForm = n => {
    //     console.log( n.toString().split('').reverse().map((a, i) => a * Math.pow(10, i)).filter(a => a > 0).reverse().join(' + ') )
    // }                      

  console.log(expandedForm(70304))