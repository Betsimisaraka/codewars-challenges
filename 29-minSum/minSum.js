function minSum(arr) {
  let total = 0;
  const sortArr = arr.sort((a, b) => a - b);
  const length = sortArr.length;
  for (var i = 0; i < Math.floor(length / 2); i++) {
    const pairs = [sortArr[i], sortArr[length - 1 - i]];
    let result = pairs.reduce((acc, num) => acc * num);
    total += result;
  }
  return total;
}

function minSum(arr) {
  return arr
    .sort((a, b) => a - b)
    .slice(0, arr.length / 2)
    .reduce(
      (acc, curr, index) => (acc += curr * arr[arr.length - index - 1]),
      0
    );
}

const minSum = (arr) =>
  arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);
