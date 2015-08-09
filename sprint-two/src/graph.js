

var Graph = function(){
  this.storage = {}
};


Graph.prototype.addNode = function(node){
  // creates new node with key: <node> and value: array waiting for edges
  this.storage[node] = [];
};

Graph.prototype.contains = function(value){
  if (this.storage[value] === undefined) {
    return false
  }
  return true
};

Graph.prototype.removeNode = function(node){
  _.each(this.storage[node], function(neighbors){
    _.each(neighbors, function(item, i){
      if (item === node){
        neighbors.splice(i, 1);
      }
    })
  })
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var result = false;
  _.each(this.storage[fromNode], function(fromNodeNeighbor){
    if (fromNodeNeighbor === toNode){
      result = true;
    }
  });
  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
    var place = this.storage[fromNode].indexOf(toNode);
    this.storage[fromNode].splice(place, 1)
};

Graph.prototype.forEachNode = function(cb){
  for (var obj in this.storage) {
    cb(obj);
  };
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



