var Tree = function(value){

  var newTree = {};

  newTree.value = value;

  // your code here
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
  var test = this;
  console.log(test);


  var recurse = function(newTree){

    if (newTree.value===target) {
      return true;

    } else if (newTree.children===[]) {
        // debugger;
        return false;
      }
    else {
      for (var i=0; i<newTree.children.length;i++) {
        return recurse(newTree.children[i]);
      };
      // debugger;
      return false;
    }
  };

  return recurse(this);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
