var BinarySearchTree = function(value){


  // Prototypal
  var newTree = Object.create(someMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

var someMethods = {

  insert: function(value){

    var recurse = function(newTree){

      if (value > newTree.value){
        if (newTree.right === null) {
          newTree.right = BinarySearchTree(value);
        }

        else {
          recurse(newTree.right);
        }
      }

      if (value < newTree.value){
        if (newTree.left === null){
          newTree.left = BinarySearchTree(value);
        }

        recurse(newTree.left);
      }
    };

    recurse(this);


  },
  contains: function(target){

    var result = false;
    var traverse = function (newTree){

      if (target === newTree.value){
        result = true;
      }

      if (target > newTree.value && newTree.right){
        traverse(newTree.right);
      }

      if (target < newTree.value && newTree.left){
        traverse(newTree.left);
      }
    }

    traverse(this);
    return result;

  },
  depthFirstLog: function(cb){


    var traverse = function(newTree) {
      if (newTree === null) { return false; }
      cb(newTree.value);

      // If first statement fails, goes to second.
      return (traverse(newTree.left) || traverse(newTree.right));
    };

    traverse(this);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
