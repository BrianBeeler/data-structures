var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var index = 0;

  // Implement the methods below
  someInstance.push = function(value){

    storage[index] = value;
    index++;

    return storage;
  };


  someInstance.pop = function(){


    if (storage[index-1]){
      var result = storage[index-1];
      delete storage[index-1];
    }

    if (index > 0){
      index--;
    }


    return result
  };

  someInstance.size = function(){

    return index;
  };

  return someInstance;
};
