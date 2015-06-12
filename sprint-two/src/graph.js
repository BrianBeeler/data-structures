

var Graph = function(){

  this.storage = {}


};


Graph.prototype.addNode = function(node){

  this.storage[node] = [];

};

Graph.prototype.contains = function(value){

  if (this.storage[value] === undefined) {
    return false
  }

  return true
};

Graph.prototype.removeNode = function(node){


  for (var i = 0; i < this.storage[node].length; i++){
    for (var j = 0; j < this.storage[node][i].length; j++){
      if (this.storage[node][i][j] === node){
        this.storage[node][i].splice(j, 1);
      }
    }
  }

  delete this.storage[node];

};

Graph.prototype.hasEdge = function(fromNode, toNode){

  for (var i =0; i < this.storage[fromNode].length; i++){
    if (this.storage[fromNode][i] === toNode){
      return true;
    }
  }
  return false;

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
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



