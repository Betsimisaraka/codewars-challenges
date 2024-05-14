function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerCaseString = string.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (!lowerCaseString.includes(alphabet[i])) {
      return false;
    }
  }
  return true;
}

function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.toLowerCase().includes(x));
}

function isPangram(string) {
  return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}
