function count(string) {
  let result = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}

function count(string) {
  return string.split("").reduce(function (counts, char) {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
}

function count(string) {
  var result = {};

  for (let i = 0; i < string.length; i++) {
    if (result.hasOwnProperty(string[i])) {
      result[string[i]] += 1;
    } else {
      result[string[i]] = 1;
    }
  }

  return result;
}

function count(string) {
  var count = {};
  string.split("").forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}
