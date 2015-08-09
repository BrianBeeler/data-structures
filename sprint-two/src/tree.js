var Tree = function(value){

  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods)

  return newTree;
};

var treeMethods = {};
treeMethods.addChild = function(value){
  var treeChild = Tree(value);
  this.children.push(treeChild);
};

treeMethods.contains = function(target){

  var result=false
  var recurse = function(newTree){
    if (newTree.value===target) {
      result=true ;
    } else if (newTree.children.length===0) {
        return false;
      }
    else {
      for (var i=0; i<newTree.children.length;i++) {
        recurse(newTree.children[i]);
      };
      return false;
    }
  };
  recurse(this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
