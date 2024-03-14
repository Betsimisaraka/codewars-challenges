// Let's make a Cat constructor!
var Cat = (function () {
  let cats = [];

  //   Throw an error if name or weight is not specified when invoking the contructor.
  const constractor = function (name, weight) {
    if (!name || !weight) {
      throw Error("invalid parameters");
    }

    // Using Object.defineProperty to write custom getters for the name property as it is a read only property.
    Object.defineProperty(this, "name", {
      get: () => name,
    });

    // Using Object.defineProperty to write custom getters and setters for the weight property as the cats weight can be changed.
    Object.defineProperty(this, "weight", {
      get: () => weight,
      set: (value) => (weight = value),
    });
    cats.push(this);
  };

  // Calculating the average weight
  constractor.averageWeight = () =>
    cats.reduce((a, b) => a + b.weight, 0) / cats.length;

  return constractor;
})();
