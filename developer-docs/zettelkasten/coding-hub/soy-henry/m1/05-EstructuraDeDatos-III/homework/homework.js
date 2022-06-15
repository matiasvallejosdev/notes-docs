'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
this.value = value;
this.right = null;
this.left = null;
}
BinarySearchTree.prototype.insert = function(value){
// menores a la izq
// mayores a la der
// ------------------------------------------------------
// si es el mimso valor 
/* if (value === this.value) return new TypeError ("Ya existe el dato"); */
if (value > this.value){
  //derecha
  if(this.right === null) this.right = new BinarySearchTree(value);
  else this.right.insert(value);
} 
if (value < this.value){
  //izquierda
if(this.left === null) this.left = new BinarySearchTree(value);
else this.left.insert(value);
} 
}
BinarySearchTree.prototype.contains = function(value){
  let root = this.value;
  if(this.value === value) return true;
  if(value > this.value){
  if(!this.right) return false;
 return this.right.contains(value);
}
  if(value < this.value){
    if(!this.left) return false;
     return this.left.contains(value);
  } else return false ;
}
BinarySearchTree.prototype.depthFirstForEach = function(cb, orden){
  //funcion (cb) --> puede ser cualquier función o llamarse de cualquier manera
  if(orden === 'pre-order'){
    //root --> left --> right
  cb(this.value);
  if(this.left) this.left.depthFirstForEach(cb, orden);
  if(this.right) this.right.depthFirstForEach(cb, orden);
  }
  else if(orden === 'post-order'){
    //left  ->  right  ->  root
  if(this.left) this.left.depthFirstForEach(cb, orden);
  if(this.right) this.right.depthFirstForEach(cb, orden);
  cb(this.value);
  } else {
    // left --> root --> right || -> in order 
  if(this.left) this.left.depthFirstForEach(cb, orden);
  cb(this.value);
  if(this.right) this.right.depthFirstForEach(cb, orden);
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function(cb,array = []){
  // let arrAux = [];
  // let contadorNivel = 0;
  // arrAux[contadorNivel] = this
  // for (let j = 0; j <= arrAux.length; j++) {
  //   if (arrAux.left) {
  //   cb(this.left.value)
  //   }
  //   arrAux[j+1];
  //   for (let i = 0; i < arrAux[j].length; i++) {
    
  //   }  

  // }
  //  j++ 
 if(this.left) array.push(this.left);

 if(this.right)array.push(this.right);

 cb(this.value);

 if(array.length > 0){
   array.shift().breadthFirstForEach(cb, array)
 }
}

BinarySearchTree.prototype.size = function(){ 
  if(!this.right && !this.left) return 1;
   else if(this.right && this.left) return 1 + this.right.size() + this.left.size(); 
  else if (this.left)  return 1 + this.left.size();
  else if (this.right) return 1 + this.right.size();
  }

let tree = new BinarySearchTree(15)
tree.insert(12)
tree.insert(22)
console.log(tree)

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
