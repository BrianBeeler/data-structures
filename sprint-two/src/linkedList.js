var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    if(list.head === null){
      list.head = Node(value);
    }
    // else {
    //   if (list.head.next != undefined){

    //   }
    // }

    // list.tail.next = Node(value);
    list.tail = Node(value)
  };

  list.removeHead = function(){
    var result = list.head.value;


    if (list.head.next != undefined){

      list.head = list.head.next;

    }
    // list.head = list.node.next

    return result
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
