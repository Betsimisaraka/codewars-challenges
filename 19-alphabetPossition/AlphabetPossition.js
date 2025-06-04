function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .map((char) => {
      const possition = char.charCodeAt(0) - "a".charCodeAt(0) + 1;
      return char >= "a" && char <= "z" ? possition : "";
    })
    .filter((possition) => possition !== "")
    .join(" ");
}

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) result += code - 64 + " ";
  }

  return result.slice(0, result.length - 1);
}

let alphabetPosition = (text) =>
  text
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("")
    .map((ch) => ch.charCodeAt(0) - 64)
    .join(" ");
