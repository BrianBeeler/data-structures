var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var index = 0


  someInstance.enqueue = function(value){

    storage[index]=value;
    index++;

    return storage;
  };

  someInstance.dequeue = function(){

    var result = storage[0];
    delete storage[0];

    for (var i=0; i < index -1; i++){
      storage[i] = storage[i+1];
    }

    if (index>0) {
      index--;
    }

    return result;
  };

  someInstance.size = function(){

    return index;
  };

  return someInstance;
};
