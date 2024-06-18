function mergeStrings(first, second) {
  const maxLength = Math.min(first.length, second.length);

  for (var i = maxLength; i > 0; i--) {
    if (first.endsWith(second.substring(0, i))) {
      return first + second.substring(i);
    }
  }

  return first + second;
}

function mergeStrings(first, second) {

  for (let i = Math.min(first.length, second.length); i >= 0; i--) {
    if (second.startsWith(first.slice(first.length - i))) {

      return first + second.slice(i);
    }
  }
}

function mergeStrings(str1, str2) {
  let overlap = '';
  
  for (let i = 0; i < str1.length; i++) {
    if (str2.startsWith(str1.slice(i))) {
      overlap = str1.slice(i);
      break;
    }
  }
  
  return str1 + str2.slice(overlap.length);
}
