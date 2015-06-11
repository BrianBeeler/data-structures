var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;

  return someInstance;
};
// how are they different

var stackMethods = {
  size: function(){
    return this.counter;
  },

  push: function(value){
    this.someInstance[this.counter] = value;
    this.counter++;

  }
};

// how are these Stack's the same?


