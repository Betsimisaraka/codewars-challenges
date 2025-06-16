function maxProduct(numbers, size) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((acc, num) => acc * num);
}

function maxProduct(numbers, size) {
  numbers = numbers.sort((a, b) => b - a);
  let result = 1;
  for (let i = 0; i < size; i++) {
    result *= numbers[i];
  }
  return result;
}
