function evenOrOdd(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}

evenOrOdd = new Proxy(evenOrOdd, {
  get: function (target, prop) {
    if (typeof prop === "string" && !isNaN(prop)) {
      return target(parseInt(prop, 10));
    }
    return target[prop];
  },
});

const target = function (n) {
  return n % 2 ? "Odd" : "Even";
};
const handler = {
  get(target, prop) {
    return target(prop);
  },
};
const evenOrOdd = new Proxy(target, handler);
