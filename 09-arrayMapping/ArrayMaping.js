Array.prototype.map = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

Array.prototype.map = function (func) {
  var res = [];
  for (var i = 0; i < this.length; i++) {
    res.push(func(this[i]));
  }
  return res;
};

Array.prototype.map = function (func) {
  var res = [];
  this.forEach(function (...args) {
    res.push(func(...args));
  });
  return res;
};

Array.prototype.map = function (mapper) {
  return this.reduce((array, item) => array.concat(mapper(item)), []);
};
