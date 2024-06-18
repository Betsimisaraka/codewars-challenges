function filter_list(l: unknown[]) {
  return l.filter((s) => typeof s !== "string");
}

function filter_list2(l: unknown[]) {
  return l.filter((v) => typeof v == "number");
}
