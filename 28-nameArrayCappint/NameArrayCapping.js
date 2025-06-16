function capMe(names) {
  return names.map((name) =>
    name
      .split("")
      .map((n, i) => (i === 0 ? n.toUpperCase() : n.toLowerCase()))
      .join("")
  );
}

function capMe(names) {
  return names.map(function (n) {
    return n.charAt(0).toUpperCase() + n.substring(1).toLowerCase();
  });
}

function capMe(names) {
  return names.map((n) => n[0].toUpperCase() + n.slice(1).toLowerCase());
}
