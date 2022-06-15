'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista --> push()
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía) ----> pop()
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null. ---> includes()
//linked list siempre se componen de un head -> puede ser null o puede tener un valor
// por lo general siempre empieza en null

 function LinkedList(){
  this.head = null;
 }
 // node va a tener un value y un next
 function Node(value){
   this.value = value;
   this.next = null;
 }

/* LinkedList.prototype.addFirst = function(value){
  let node = new Node(value);
  let current = this.head;
  if (!this.head) {
  this.head = node
  return
} else {
  current = this.head
}
}*/
 LinkedList.prototype.add = function(value){
  let current = this.head;
  let node = new Node(value);
  if (!this.head) {
    this.head = node;
    return
  }
  while (current.next !== null) {
    current = current.next;
  }  
  current.next = node;
 }

 LinkedList.prototype.remove = function () {
  var current = this.head
  if (current === null) {
      return null
  }
  if (current.next == null) {
      const removedValue = current.value;
      this.head = null;
      this._length--;
      return removedValue;
  }
  var removedValue = null
  while (current.next) {
      if (current.next.next === null) {
        removedValue = current.next.value;
          break

      }
      current = current.next;
  }
  current.next = null;
  this._length--;
  return removedValue;
}

 LinkedList.prototype.search = function (value) {
  var current = this.head
      while (current) {
      if ( current.value === value || (value instanceof Function && value(current.value) )) return current.value
      current = current.next;
  }
return null;
 }





// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

  function HashTable() {
  this.buckets = [];
  this.numBuckets = 35;
  }

  HashTable.prototype.hash = function (key){
      let sum = 0;
      for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i)
      }
    return sum % this.numBuckets;
    }

  HashTable.prototype.set = function (key, value) {
      if (typeof key !== 'string' ) throw new TypeError("Keys must be strings");
      let bucketNumber = this.hash(key);
      if (!this.buckets[bucketNumber]) {
      this.buckets[bucketNumber] = {};
    }
    this.buckets[bucketNumber][key] = value
  }
  
  
  HashTable.prototype.get = function (key,) {
      let bucketNumber = this.hash(key);
      return this.buckets[bucketNumber][key];
  }
  
  HashTable.prototype.hasKey = function (key) {
    let bucketNumber = this.hash(key);
    return !!this.buckets[bucketNumber][key];
  }
  
 
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
}
