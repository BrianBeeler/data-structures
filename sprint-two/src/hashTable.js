var HashTable = function(){

  this._limit = 8;
  this._storage = LimitedArray(this._limit);

  // Creates buckets
  for (var i = 0; i<this._limit; i++) {
    this._storage.set(i, [])
  }

};

HashTable.prototype.insert = function(k, v){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(i);
  for (var j = 0; j < currentBucket.length; j++) {
    if (currentBucket[j][0] === k) {
      currentBucket[j][1] = v;
      return;
    }
  }
  currentBucket.push([k,v]);
};

HashTable.prototype.retrieve = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(i);

  for (var j = 0; j<currentBucket.length; j++) {
    if (currentBucket[j][0]===k) {
      return currentBucket[j][1];
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(i);

  for (var j = 0; j < currentBucket.length; j++){
    if (currentBucket[j][0] === k){
      currentBucket.splice(j,1);
    }
  }
  this._storage.set(i, currentBucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
