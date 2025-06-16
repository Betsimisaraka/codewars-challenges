function explode(x) {
  let score;
  if (typeof x[0] === "number" && typeof x[1] === "number") {
    score = x[0] + x[1];
  } else if (typeof x[0] === "number") {
    score = x[0];
  } else if (typeof x[1] === "number") {
    score = x[1];
  } else {
    return "Void!";
  }

  return Array.from({ length: score }, () => [...x]);
}

function explode(x) {
  let [a, b] = x;

  if (typeof a == "number" && typeof b == "number")
    return new Array(a + b).fill(x);
  else if (typeof a == "number") return new Array(a).fill(x);
  else if (typeof b == "number") return new Array(b).fill(x);

  return "Void!";
}
