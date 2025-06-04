function highAndLow(numbers) {
  const splitNumbers = numbers.split(" ");

  const min = Math.min(...splitNumbers);
  const max = Math.max(...splitNumbers);

  return `${max} ${min}`;
}

function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
}

function highAndLow(numbers) {
  var arr = numbers.split(" ").sort(function (a, b) {
    return a - b;
  });
  return arr[arr.length - 1] + " " + arr[0];
}
