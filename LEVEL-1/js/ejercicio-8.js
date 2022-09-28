/**
 * Su objetivo en este kata es implementar una función de diferencia, que resta una lista de otra y devuelve el resultado.
 * Debe eliminar todos los valores de la lista a, que están presentes en la lista b manteniendo su orden.
 * 
 * Si un valor está presente en b, todas sus ocurrencias deben eliminarse del otro:
 * 
 * ejemplos:
 * arrayDiff([1,2],[1]) == [2]
 * arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */


const arrayDiff = (a, b) => a.flatMap(v => b.indexOf(v) == -1 ? v : [])


arrayDiff([1,2],[1]) // == [2]
arrayDiff([1,2,2,2,3],[2]) // == [1,3]
arrayDiff([12,2,23],[2]) // == [12,23]
arrayDiff([1,2], [1]), // [2]
arrayDiff([1,2,2], [1]), // [2,2]
arrayDiff([1,2,2], [2]), // [1]
arrayDiff([1,2,2], []), // [1,2,2]
arrayDiff([], [1,2]), // []
arrayDiff([1,2,3], [1,2]) // [3]
arrayDiff([10],[]) //10
arrayDiff([-18,-17,-18,14,11,8,7,16,-4,10,-1,7],[-18,-17]) // [ 14, 11, 8, 7, 16, -4, 10, -1, 7 ]
arrayDiff([3,-7,0,-13],[3,-7,0]) // [ -13 ]
