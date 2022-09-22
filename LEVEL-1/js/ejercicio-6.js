/**
 * Complete el método/función para que convierta las palabras delimitadas por guiones/guiones 
 * bajos en mayúsculas y minúsculas. La primera palabra dentro de la salida debe estar en mayúsculas 
 * solo si la palabra original estaba en mayúsculas (conocido como Upper Camel Case, también conocido como caso Pascal).
 * 
 * "the-stealth-warrior" gets converted to "theStealthWarrior"
 * "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 */

const expresionRegularAlfa = /[-_]+/g
const toCamelCase = (str) => {

    let arr = str.split(expresionRegularAlfa)
    let arr2 = []
    for(let i = 1; i < arr.length; i++ ){
        arr2.push(arr[i].replace(arr[i][0], arr[i][0].toUpperCase()))
    }
    console.log(arr[0] + arr2.join(''))


}

toCamelCase("the-stealth-warrior")


// Este ejercicio como muchos otros se pueden hacer con expresiones regulares
/**
 * Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones 
 * de caracteres en cadenas. En JavaScript, las expresiones regulares también son objetos. 
 * Estos patrones se utilizan con los métodos exec() y test() de RegExp, y con match(), matchAll(), 
 * replace(), replaceAll() (en-US), search() y split() métodos de String. 
 * Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
 */
/*
 Coincidencias Basicas
 .       - Cualquier Caracter, excepto nueva linea
 \d      - Cualquier Digitos (0-9)
 \D      - No es un Digito (0-9)
 \w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
 \W      - No es un Caracter de Palabra.
 \s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
 \S      - No es un Espacio, Tab o nueva linea.
 
 Limites
 \b      - Limite de Palabra
 \B      - No es un Limite de Palabra
 ^       - Inicio de una cadena de texto
 $       - Final de una cadena de texto
 
 Cuantificadores:
 *       - 0 o Más
 +       - 1 o Más
 ?       - 0 o Uno
 {3}     - Numero Exacto
 {3,4}   - Rango de Numeros (Minimo, Maximo)
 
 Conjuntos de Caracteres
 []      - Caracteres dentro de los brackets
 [^ ]    - Caracteres que NO ESTAN dentro de los brackets
 
 Grupos
 ( )     - Grupo
 |       - Uno u otro
 */
// Una expresión regular se puede hacer con barras
let re = /ab+c/
// tambien con haciendo una nueva instancia de RegExp
re = new RegExp('ab+c')


let text = `
Carlos Arturo	
449 123 45 67
carlos_@hotmail.com
www.carlos.com

Manuel Alejandro
448-234-56-78
alejandro@outlook.com
https://www.manuel.alejandro.com.mx
http://alejandro.com.mx

Cesar Alan
123 345 67 89
cesar@hotmail.com
cesar.net
`
// la g es global y la i es case insensitive
console.log(/carlos/gi, 'para ver todas las coindicencias con el nombre sin importar mayusculas o minusculas')
// la \d es para cualquier digito de 0 a 9 si agrupamos \d\d es para dos numeros juntos y \d\d\d es para 3 numeros juntos
// si ponemos un . entre las \d quiere decir que tambien esperamos una coincidencia de algun numero que este separado
// por cualquier cosa de los grupos de numeros
console.log(/\d\d\d.\d\d\d.\d\d.\d\d/g, 'para buscar todos los numeros que esten en grupos de 3 y de dos y separados por cualquier cosa')
// el ejemplo de arriba sería una expresión regular muy larga, pero para eso tenemos los cuantificadores
console.log(/\d.*/g, 'hacemos lo mismo que el ejemplo de arriba pero mucho más corto')
// el simbolo ^ dice que debe estar al inicio de la cadena, luego el \w+ busca caracteres de palabra de la a-z, A-Z, 0-9 y _ 
// añadimos el más para que busque mas de un caracter y los agrupe, despues tenemos \s? 
// nos inidica que el espaciado es opcional, puede estar o no.
// luego volvemos a tener \w+ pero le añadimos ? para que sea opcional en caso de que en el texto solo 
// tengamos un nombre y no dos en la misma línea
// y luego usamos el mismo espaciado opcional y el $ significa que tambien debe de buscar al final de la cadena
// la banderas que usamos son g de global, i de insensitive y m de multilinea
console.log(/^\w+\s?\w+?\s?$/gim, 'Con esto vemos las coincidencia de los nombres de nuestro texto')
// Usamos el \d{3} para decir que la coincidencia deben ser un grupo de 3 numeros,
// luego pasamos un caracter [\s-] es decir puede ser un espacio o un guion medio y la bandera g para que sea global
// NOTA: dentro [] no es necesario que escapemos los simbolos, en caso de la \s si porque asi es como se escribe el token
// para buscar espacios
console.log(/\d{3}[\s-]\d{3}[\s-]\d{2}[\s-]\d{2}/g, 'Esta forma es más especifica que usar los puntos, de esa forma nos aseguramos de que los numeros deben tener una separacion de espacio o un guion medio')
// usamos dentro de [] a-z para todas las minusculas y A-Z para las mayusculas
console.log(/[a-zA-Z]+/g, 'Con esto obtenemos todos las letras y conjuntos de letras que tenga nuestro texto')
// en este caso si usamos el ^ estamos diciendo que invierta la coincidencia, si antes me daba todo de a-z en minuscula y A-Z en mayuscula
// ahora con el ^ me daba todo lo que no coincida con eso
console.log(/[^a-zA-Z]+/g, 'Con esto obtenemos todo lo que no se encuentre dentro de los []')
// por ejemplo si nosotros en nuestro programa solo queremos permitir ciertos numeros de telefono 
// es decir que empiezen con ciertos codigos de pais entonces usamos lo denomidado grupos que son unos parentesis ()
// dentro ponemos los numeros y usamos un operador | que quiere decir o uno o el otro
// luego ya buscamos un espacio o guion y lo demas que ya fue explicado en ejercicios anteriores
console.log(/(449|448)[\s-]\d{3}[\s-]\d{2}[\s-]\d{2}/g, 'con esto solo buscamos coindicencia con los grupos de 3 numeros que empiezan en 449 o 448')
// podemos usar los grupos y cuantificadores, de esta forma encerramos en parentesis
// una expresion y lo repetimos 2 veces con {2}
console.log(/(449|448)[\s-]\d{3}[\s-](\d{2}[\s-]){2}/g, 'grupos + cuantificadores')
// lo primero que hacemos es entre brackets buscar de la a-z en minuscula, luego de 0-9 y añadimos que puede tener
// punto, guion bajo y medio luego con el + decimos que puede ser de 1 a más, luego añadimos que debe seguir con el @
// y volvemos a repetir el contenido del brackets tambien será de 1 a más
// luego espacamos el . y entre brackets buscamos de a-z en minuscula y que sea de 1 a más 
console.log(/[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]+/g, 'con esta expresion filtramos coincidencias que tengan el formato de correos')
// usamos el ^ para buscar desde el inicio de la linea, luego en un grupo decimos que debe ir http y que la s es opcional con ?
// espacamos los // y decimos que todo este grupo será opcional (https?:\/\/)?
// luego creamos otro grupo que debe llevar www y un punto tambien decimos que será opcional (www\.)?
// usamos brackets y dentro buscamos de la a-z y de 0-9 tambien el guion medio y que será de 1 a más [a-z.]+
// al final usamos el $ para decir que tiene que buscan de inicio de linea a final de linea
console.log(/^(https?:\/\/)?(www\.)?[a-z0-9-]+\.[a-z.]+$/g, 'coincidencias con formato de url de un sitio web (sencillo)')
