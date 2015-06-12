

var Graph = function(){

  this.storage = {}
  this.nodeCounter = 0


};

var Planet = function(value) {
  this.edgeCounter = 0;
  this.value = value;
};

// planet 1 is a string i.e. the value of a planet
var Edge = function(planet1,planet2) {

  this.planet1 = planet1;
  this.planet2 = planet2;

};


Graph.prototype.addNode = function(value){
  var newPlanet = new Planet(value);


  this.storage[this.nodeCounter] = newPlanet;
  this.nodeCounter++;
};

Graph.prototype.contains = function(value){

  for (var i = 0; i < this.nodeCounter; i++){
    if (this.storage[i].value === value) {
      return true;
    };
  };

  return false;
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



