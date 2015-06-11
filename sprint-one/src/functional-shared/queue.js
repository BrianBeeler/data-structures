var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
    counter: 0,
    storage: {}
  };

  _.extend(someInstance, queueMethods);
  return someInstance;


};

var queueMethods = {
  size: function (){
    return this.counter;
  },

  enqueue: function(value){

    this.storage[this.counter] = value;
    this.counter++;
  },

  dequeue: function(){
    var result = this.storage[0];
    delete this.storage[0];

    for (var i=0; i < this.counter - 1; i++){
      this.storage[i] = this.storage[i+1];
    }

    if (this.counter > 0){
      this.counter--;
    }

    return result;
  }
};



// enqueue
// dequeue
// size
