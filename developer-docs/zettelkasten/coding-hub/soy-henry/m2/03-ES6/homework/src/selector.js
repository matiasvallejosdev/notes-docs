var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

  if(matchFunc(startEl)) resultSet.push(startEl);

  for(let el of startEl.children){
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc,el)); 
  }

  return resultSet;
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí}
  if(selector[0] === '#') return 'id';
  if(selector[0] === '.') return 'class';
  if(selector.includes('.')) return 'tag.class'
  return 'tag';
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  const selectorType = selectorTypeMatcher(selector);
  let matchFunction;
  if (selectorType === "id") { 
     //concateno el '#' por que el.id me devuelve un string con el nombre del id.
     matchFunction = function(el){
      return '#' + el.id === selector;
    }
   
  } else if (selectorType === "class") {
    matchFunction = function(el){
      //si tuviese + de 1 clase itero sobre el array classList y voy comparando.
          for (let i = 0; i < el.classList.length; i++) {
            if('.' + el.classList[i] === selector) return true;
          }
        //si no la encuentra sale del for y retorna false
        return false;
      }
    
  } else if (selectorType === "tag.class") {
    matchFunction = function(el){
      //con split separo por punto, arr será un arreglo de la forma ['tag','class'].
      // hago destructuring de eso:
      let [t, c] = selector.split('.') // t = "TAG", c = "class"
      //ahora hago recursión:
      //llamos a matchFunctionMaker con t y despues con c
      //en ambos casos me devuelve una funcion que retornará true o false,
      //entonces las ejecuto pasandoles de nuevo el elemento
      //si ambas dan true es el elemento que estoy buscando.
      //(Para que funcione bien hay que hacer primero el caso
      // de que selectorType sea === 'tag')
      return matchFunctionMaker(t)(el) && matchFunctionMaker('.' + c)(el)
      }
    
  } else if (selectorType === "tag") {
    matchFunction = function(el){
      return el.tagName === selector.toUpperCase();
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
