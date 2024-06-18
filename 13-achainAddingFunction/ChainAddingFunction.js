function add(n) {
  const sum = (num) => add(n + num);
  sum.valueOf = () => n;

  return sum;
}

function add(n) {
  var fn = function (x) {
    return add(n + x);
  };

  fn.valueOf = function () {
    return n;
  };

  return fn;
}
