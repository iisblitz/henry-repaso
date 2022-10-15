var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  if(matchFunc(startEl)){
    resultSet.push(startEl);
  }
  for(let i=0; i<startEl.children.length;i++){
    traverseDomAndCollectElements(matchFunc,children[i]);
    resultSet = [...resultSet,...elements];

  }
return resultSet;
  //sospecho que lleva hacer un navegador de arbol, toma la funcion matchfund y si da true almacena el result en el array
};

var selectorTypeMatcher = function(selector) {

  if(selector[0]==="#") return 'id'
  else if (selector[0] === ".") return "class"
  if(selector.split('.').length>1) return 'tag.class'
  else return 'tag'
};

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = function(e){
     return '#' + e.id === selector;
   }
  } else if (selectorType === "class") {
    matchFunction = function(e){
      let classes = e.classList;
      classes.forEach(e => {if(`.${e}`===selector) return true})
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function(e){
      var[tagBuscado, classBuscada]= selector.split('.');
      return matchFunctionMaker(tagBuscado)(el) && matchFunctionMaker(`.${classBuscada}`)(el)
    }
  } else if (selectorType === "tag") {
    matchFunction = function(e){ //
      return e.tagName.toLowerCase === selector;
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


//$() any tag, id, class or tag.class