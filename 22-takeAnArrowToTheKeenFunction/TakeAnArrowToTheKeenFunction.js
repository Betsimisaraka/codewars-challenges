// String.fromCharCode() is a static method of a String. It return a string created form a specified sequence of UTF-16 code units.

const arrowFunc = function (arr) {
  return arr.map((ar) => String.fromCharCode(ar)).join("");
};

const ArrowFunc = (arr) => String.fromCharCode(...arr);
