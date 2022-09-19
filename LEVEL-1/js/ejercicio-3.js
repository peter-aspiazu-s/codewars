/**
 * Por lo general, cuando compra algo, se le pregunta si su número de tarjeta de crédito, 
 * número de teléfono o la respuesta a su pregunta más secreta sigue siendo correcta. 
 * Sin embargo, dado que alguien podría mirar por encima de su hombro, no desea que eso se muestre en su pantalla. 
 * En cambio, lo enmascaramos.

Su tarea es escribir una función maskify, que cambia todos menos los últimos cuatro caracteres en '#'.

Ejemplos:

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

"¿Cuál era el nombre de tu primera mascota?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
 */

// return masked string

// resolución recomendada 
function maskify(cc) {
    return console.log(cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4));
}

// Mi resolución
/*const maskify = (cc) => {

    if(cc.length > 4){  
        let array = []
        for(let i = 0; i < (cc.length - 4); i++){

            cc.replace(cc[i], '#')
            array.push(cc[i])
        }

        
        let array2 = []
        array.forEach(item => array2.push('#'))
        const simbol = array2.join('')
        
        const ultimate = cc.slice(-4)
        const result = simbol + ultimate
        
        return console.log(result)
    }else{
        return console.log(cc);
    }
}*/

maskify('4556364607935616')
maskify('455636460')