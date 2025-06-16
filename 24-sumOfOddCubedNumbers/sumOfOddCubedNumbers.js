function cubeOdd(arr) {
  if (!arr.every((ar) => typeof ar === "number")) {
    return undefined;
  }
  const newValue = arr
    .filter((ar) => ar % 2 !== 0)
    .map((ar) => Math.pow(ar, 3))
    .reduce((acc, sum) => acc + sum, 0);
  return newValue;
}

let cubeOdd = (a) => {
  var isNumeric = a.every((x) => !isNaN(x));
  return isNumeric
    ? a.filter((n) => n % 2).reduce((s, n) => s + n * n * n, 0)
    : undefined;
};

function cubeOdd(arr) {
  arr = arr.filter((num) => {
    return num % 2 != 0;
  });
  arr = arr.reduce((a, b) => a + Math.pow(b, 3), 0);
  return isNaN(arr) ? undefined : arr;
}
