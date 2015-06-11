var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.tail === null){
      list.tail = Node(value);
      list.head = Node(value);
      // console.log(list);
    }
    else{
      list.tail = Node(value);
      // console.log(list.tail);
    }

  };

  list.removeHead = function(){

    var result = list.head.value;

    // list.head = list.head[next];
    console.log(list.head);


    return result;
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
