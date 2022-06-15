'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factor = [1];
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      factor.push(i);
      num /= i; 
      i -= 1;
    }
  }
  return factor;

}

function bubbleSort(array) { // 
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // esto es para recorrer el array entero
  for (let i = 0; i < array.length; i++) {
    // esto es para recorrer cada elemento del array 
    for (let j = 0; j < array.length; j++) {
      // si el elemento x es mayor que el que le sigue (x + 1) entonces 
      if(array[j] > array[j + 1 ]){
      //vas a cambiarme el elemento x y el que le sigue porque es de menor a mayor
      // si el mayor está primero tienes que ponerlo de ultimo
        [array[j], array[j + 1]] = [array[j+1], array[j]];
      }
    
    }
  }
  return array; 
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let j = index - 1
    while ((j > -1) && (element < array[j])) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = element;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let minNum = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minNum]) {
        minNum = j;
      }
    }
    [array[i], array[minNum]] = [array[minNum], array[i]]
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
