function sumStrings(a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let digitA = i >= 0 ? parseInt(a[i]) : 0;
    let digitB = j >= 0 ? parseInt(b[j]) : 0;
    let sum = digitA + digitB + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
    i--;
    j--;
  }

  if (result[0] === "0") {
    result = result.slice(1);
  }

  return result;
}
