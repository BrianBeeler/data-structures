var Queue = function(){

  var someInstance = {};
  var storage = {};
  var index = 0;

  someInstance.enqueue = function(value){

    storage[index]=value;
    index++;
    return storage;

  };

  someInstance.dequeue = function(){

    // Save the first item, delete it
    var result = storage[0];
    delete storage[0];

    // Sets each item as the one after it
    for (var i=0; i < index -1; i++){
      storage[i] = storage[i+1];
    }

    // Decrement if greater than 0
    if (index>0) {
      index--;
    }
    // Return deleted item
    return result;
  };

  someInstance.size = function(){
    return index;
  };

  return someInstance;
};
