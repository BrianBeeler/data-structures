var HashTable = function(){

  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i<this._limit; i++) {
    this._storage.set(i, [])
  }

};

HashTable.prototype.insert = function(k, v){
  // debugger;
  var i = getIndexBelowMaxForKey(k, this._limit);
  //var currentBucket=this._storage
  var currentBucket = this._storage.get(i);
  currentBucket[k]=v;
  //this._storage.set(currentBucket,i)
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(i);
  // debugger;
  if (!currentBucket[k]){
    return null;
  }
  else {
    return currentBucket[k];
  }


};

HashTable.prototype.remove = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(i);

  if (!currentBucket[k]){
    return null;
  }
  else {
    delete currentBucket[k];
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
