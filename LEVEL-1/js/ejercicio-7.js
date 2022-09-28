/*
* La función rgb está incompleta. Complételo para que al pasar valores decimales RGB se devuelva una 
* representación hexadecimal. Los valores decimales válidos para RGB son 0 - 255. 
* Cualquier valor que quede fuera de ese rango debe redondearse al valor válido más cercano.

* Nota: Su respuesta siempre debe tener 6 caracteres, la forma abreviada con 3 no funcionará aquí.

* Los siguientes son ejemplos de valores de salida esperados:
 */

// SOLUCIÓN RECOMENDADA
function rgb(r, g, b){
    console.log(toHex(r)+toHex(g)+toHex(b))
    return toHex(r)+toHex(g)+toHex(b);
  }
  
  function toHex(d) {
      if(d < 0 ) {return "00";}
      if(d > 255 ) {return "FF";}
      console.log(("0"+(Number(d).toString(16))).slice(-2).toUpperCase())
      return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
  }


// const rgb = (r, g, b) => {
    
//     let arr = []
//     const valorF = 'F'.repeat(2)
    
//     arr = [...arr, r,g,b]
    
//     let arr2 = []

//     arr.map((v,i,a) => {
//         if(v > 255){
//             v = valorF
//         }
//         if(v > 0 && v < 10){
//             v = v * 10
//             v = v.toString() 
//             v = v.split('')
//             v = v.reverse()
//             v = v.join('')
//         }
//         if(v > 9 && v < 16){
//             v = v.toString(16).toUpperCase() + 0 
//             v = v.split('')
//             v = v.reverse()
//             v = v.join('')
//         }
//         if(v <= 0){
//             v = 0
//             v = v.toString()
//             v = v.repeat(2)
//         }
//         v = v.toString(16).toUpperCase()
//         arr2.push(v)
        
//     })
//     return arr2.join('')

// }


rgb(240, 10, 256)
rgb(240, 11, 256)
rgb(240, 12, 256)
rgb(240, 13, 256)
rgb(240, 14, 256)
rgb(240, 15, 256)