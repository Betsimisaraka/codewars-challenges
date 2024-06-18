var Vector = function (components) {
    this.components = components
  };
  
  Vector.prototype.add = function (vector) {
    if(this.components.length !== vector.components.length) {
      throw new Error('Length have to be the same')
    }
    
    return new Vector(this.components.map((val, index) => val + vector.components[index]))
  }
  
  Vector.prototype.subtract = function (vector) {
    if(this.components.length !== vector.components.length) {
      throw new Error('Length have to be the same')
    }
    
    return new Vector(this.components.map((val, index) => val - vector.components[index]))
  }
  
  Vector.prototype.dot = function (vector) {
    if(this.components.length !== vector.components.length) {
      throw new Error('Length have to be the same')
    }
    
    return this.components.reduce((sum, val, index) => sum + (val * vector.components[index]), 0)
  }
  
  Vector.prototype.norm = function () {
    return Math.sqrt(this.components.reduce((sum, val) => sum + Math.pow(val, 2), 0))
  }
  
  Vector.prototype.toString = function () {
    return '(' + this.components.join(',') + ')'
  }
  
  Vector.prototype.equals = function (vector) {
    return this.components.every((val, index) => val === vector.components[index])
  }


var Vector = function (components) {
    this.items = components;
    this.length = components.length;
};

Vector.prototype = {
    do: function (action, vector) {
        if (vector.length !== this.length) { throw 'Different Length!'; }
        return new Vector(this.items.map(function (v, k) { 
        return eval(v + action + vector.items[k])
        }));
    },
    add: function (v) { return this.do('+', v); },
    subtract: function (v) { return this.do('-', v); },
    sum: function (v) { return eval(v.items.join('+')); },
    dot: function (v) { return this.sum(this.do('*', v)); },
    norm: function () { return Math.sqrt(this.dot(this)); },
    toString: function() { return '(' + this.items + ')'; },
    equals: function (v) { return this.toString() == v.toString(); }  
};
