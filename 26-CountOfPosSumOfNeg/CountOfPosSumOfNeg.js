function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0) ++positive;
    else negative += input[i];
  }

  return [positive, negative];
}

function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || !input.length) return [];
  return input.reduce(
    (arr, n) => {
      if (n > 0) arr[0]++;
      if (n < 0) arr[1] += n;
      return arr;
    },
    [0, 0]
  );
}

function countPositivesSumNegatives(input) {
  return !input || !input.length
    ? []
    : [
        input.filter((n) => n > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b),
      ];
}
